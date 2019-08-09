/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

package org.angboot.util;

import org.springframework.util.StringUtils;

import java.io.*;
import java.util.*;

/**
 * Default properties.
 *  Firstly, get property is null from main properties,
 *  will get property from default properties.
 */
public class DefaultProperties extends Properties {

   public DefaultProperties(Properties mainProperties, Properties defaultProperties) {
      this.mainProperties = mainProperties;
      this.defaultProperties = defaultProperties;
   }

   @Override
   public synchronized Object setProperty(String key, String value) {
      return mainProperties.setProperty(key, value);
   }

   @Override
   public synchronized void load(Reader reader) throws IOException {
      mainProperties.load(reader);
   }

   @Override
   public synchronized void load(InputStream inStream) throws IOException {
      mainProperties.load(inStream);
   }

   @Override
   @Deprecated
   public void save(OutputStream out, String comments) {
      throw new UnsupportedOperationException("This method has deprecated. " +
         "please call <store(OutputStream out, String comments)> method!");
   }

   @Override
   public void store(Writer writer, String comments) throws IOException {
      mainProperties.store(writer, comments);
   }

   @Override
   public void store(OutputStream out, String comments) throws IOException {
      mainProperties.store(out, comments);
   }

   @Override
   public synchronized void loadFromXML(InputStream in) throws IOException, InvalidPropertiesFormatException {
      mainProperties.loadFromXML(in);
   }

   @Override
   public void storeToXML(OutputStream os, String comment) throws IOException {
      mainProperties.storeToXML(os, comment);
   }

   @Override
   public void storeToXML(OutputStream os, String comment, String encoding) throws IOException {
      mainProperties.storeToXML(os, comment, encoding);
   }

   @Override
   public String getProperty(String key) {
      return getProperty(key, null);
   }

   @Override
   public String getProperty(String key, String defaultValue) {
      String result = mainProperties.getProperty(key);

      if(StringUtils.isEmpty(result)) {
         result = defaultProperties.getProperty(key);

         if(StringUtils.isEmpty(result)) {
            result = defaultValue;
         }
      }

      return result;
   }

   @Override
   public Enumeration<?> propertyNames() {
      return mainProperties.propertyNames();
   }

   @Override
   public Set<String> stringPropertyNames() {
      return mainProperties.stringPropertyNames();
   }

   @Override
   public void list(PrintStream out) {
      mainProperties.list(out);
   }

   @Override
   public void list(PrintWriter out) {
      mainProperties.list(out);
   }

   @Override
   public synchronized int size() {
      return mainProperties.size();
   }

   @Override
   public synchronized Object get(Object key) {
      return this.getProperty(key + "");
   }

   @Override
   public Object clone() {
      Properties mcopy = (Properties) mainProperties.clone();
      Properties dcopy = (Properties) defaultProperties.clone();
      return new DefaultProperties(mcopy, dcopy);
   }

   @Override
   public boolean contains(Object value) {
      return mainProperties.contains(value) ||
         defaultProperties.contains(value);
   }

   @Override
   public boolean containsKey(Object key) {
      return mainProperties.containsKey(key) ||
         defaultProperties.containsKey(key);
   }

   @Override
   public boolean containsValue(Object value) {
      return mainProperties.containsValue(value) ||
         defaultProperties.containsValue(value);
   }

   @Override
   public synchronized Object put(Object key, Object value) {
      return mainProperties.put(key, value);
   }

   @Override
   public synchronized Object remove(Object key) {
      return mainProperties.remove(key);
   }

   @Override
   public synchronized void putAll(Map<?, ?> t) {
      mainProperties.putAll(t);
   }

   @Override
   public synchronized Object getOrDefault(Object key, Object defaultValue) {
      return this.getProperty(key + "", defaultValue + "");
   }

   @Override
   public synchronized boolean remove(Object key, Object value) {
      return mainProperties.remove(key, value);
   }

   @Override
   public synchronized boolean replace(Object key, Object oldValue, Object newValue) {
      return mainProperties.replace(key, oldValue, newValue);
   }

   @Override
   public synchronized Object replace(Object key, Object value) {
      return mainProperties.replace(key, value);
   }

   private final Properties mainProperties;
   private final Properties defaultProperties;
}
