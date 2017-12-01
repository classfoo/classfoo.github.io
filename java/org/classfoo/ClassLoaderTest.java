package org.classfoo;

public class ClassLoaderTest extends ClassLoader {


	@Override
	protected Class<?> findClass(String name) throws ClassNotFoundException {
		return super.findClass(name);
	}
	
	@Override
	protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
		// TODO Auto-generated method stub
		return super.loadClass(name, resolve);
	}
}
