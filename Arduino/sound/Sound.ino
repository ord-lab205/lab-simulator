int a, cnt;
void setup() { Serial.begin(9600); }

void loop() {
	a = analogRead(A0);
  if (a > 50) {
    Serial.println(a);
    delay(100);
  }
}



