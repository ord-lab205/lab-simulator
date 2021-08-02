int a, cnt;
void setup() { Serial.begin(9600); }

void loop() {
	a = analogRead(A0);
  if (a > 50) {
    Serial.print(a);
    Serial.print(" ");
    cnt = cnt + 1;
    if (cnt > 30) {
      Serial.println(a);
      cnt = 0;
    }
    delay(10);
  }
}



