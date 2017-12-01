package org.classfoo.spark;

import org.apache.spark.launcher.SparkAppHandle;
import org.apache.spark.launcher.SparkLauncher;

public class SparkLauchTest {
    public static void main(String[] args) throws Exception {
      SparkAppHandle handle = new SparkLauncher()
        .setAppResource("/my/app.jar")
        .setMainClass("my.spark.app.Main")
        .setMaster("local")
        .setConf(SparkLauncher.DRIVER_MEMORY, "2g")
        .startApplication();
      // Use handle API to monitor / control application.
    }
  }