package org.classfoo.java8;

@FunctionalInterface
public interface FunctionalInterfaceTest {

	void insert();

	default String runTest(String input) {
		System.out.println(input);
		return input;
	}
}
