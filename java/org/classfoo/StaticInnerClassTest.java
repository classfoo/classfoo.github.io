package org.classfoo;

public class StaticInnerClassTest {

	public StaticInnerClassTest() {
		InnerClass innerClass = new InnerClass();
	}

	public class InnerClass {
		public static final String xxx = "";

	}

	public static class StaticInnerClass {
		public static final String xxx = "";

	}

	public static final void test() {
		class StaticInnerClass2 {
			public static final String xxx = "";

		}
		new StaticInnerClass2();
	}

	public void test2() {
		final class innerClass2 {
			public static final String xxx = "";

		}
		new innerClass2();
		abstract class innerClass3 {
			public static final String xxx = "";

		}
		;

	}

	public static final void main(String[] args) {
		StaticInnerClassTest test = new StaticInnerClassTest();
		InnerClass inner = test.new InnerClass();

		StaticInnerClass staticInner = new StaticInnerClass();
	}
}

final class innerClass4 {
	public static final String xxx = "";
}

abstract class innerClass5 {
	public static final String xxx = "";

}

class innerClass6 {
	public static final String xxx = "";

}