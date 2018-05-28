#include <ELClient.h>
#include <ELClientMqtt.h>
#include "KBIot.h"

ELClient esp(&Serial, &Serial);
ELClientMqtt mqtt(&esp);

struct CallbackDict{
	String topic;
	Callback fun;
};

CallbackDict mqttCallback[MAX_TOPIC];
bool connected;

KBIot::KBIot() {

}

void mqttConnected(void* response) {
	Serial.println("MQTT connected");
}

void mqttDisconnected(void* response) {
	Serial.println("MQTT disconnected");
}

void mqttPublished(void* response) {
	Serial.println("MQTT published");
}

void mqttData(void* response) {
	ELClientResponse *res = (ELClientResponse *)response;
	String topic = res->popString();
	String data = res->popString();
	
	for(int i=0;i<MAX_TOPIC;i++){
		if(mqttCallback[i].topic == topic){
			mqttCallback[i].fun(data);
			return;
		}
	}
}

void KBIot::init() {
	bool ok;
	do {
		ok = esp.Sync();      // sync up with esp-link, blocks for up to 2 seconds
		if (!ok) Serial.println("EL-Client sync failed!");
	} while(!ok);
 Serial.println("EL-Client synced!");
	mqtt.connectedCb.attach(mqttConnected);
	mqtt.disconnectedCb.attach(mqttDisconnected);
	mqtt.publishedCb.attach(mqttPublished);
	mqtt.dataCb.attach(mqttData);
	mqtt.setup();
}

void KBIot::loop() {
	esp.Process();
}

void KBIot::subscribe(String topic){
	mqtt.subscribe(topic.c_str());
}

int KBIot::regGot(String topic, Callback fun) {
	for(int i=0;i<MAX_TOPIC;i++){
		if(mqttCallback[i].fun == 0){
			mqttCallback[i].topic = topic;
			mqttCallback[i].fun = fun;
			return i;
		}
	}
	return -1;
}

void KBIot::publish(String topic, String data) {
  mqtt.publish(topic.c_str(), data.c_str());
}


