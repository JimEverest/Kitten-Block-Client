#ifndef KITTENBOTIOT_H
#define KITTENBOTIOT_H

#define MAX_TOPIC 8
typedef void (*Callback)(String data);

class KBIot
{
	public:
		KBIot();
		void init();
		void publish(String topic, String data);
		void subscribe(String topic);
		int regGot(String topic, Callback fun);
		void loop();

};

#endif
