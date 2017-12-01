package org.classfoo.java8;

import java.util.ArrayList;
import java.util.function.Function;

public class FunctionInterfaceTestMain {

	public void save(Function<String, String> func) {
		func.apply("fuck");
	}

	public static void main(String[] args) {
		FunctionInterfaceTestMain main = new FunctionInterfaceTestMain();
		ArrayList<String> list = new ArrayList<String>(10);
		
		//main.save(() -> {x + y});
	}
}
