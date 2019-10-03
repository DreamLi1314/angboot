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

import java.io.File;
import java.nio.file.InvalidPathException;
import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileSystemService {
   public static FileSystemService getInstance() {
      return SingletonManager.getInstance(FileSystemService.class);
   }

   /**
    * Retrieves the specified file from the File System.
    *
    * @param fileName Full path of the File to retrieve from the File System.
    *
    * @param more Additional files to get from the full path.
    *
    * @return the Path representation of the File.
    *
    * @throws InvalidPathException if the fileName contains an invalid character.
    */
   public Path getPath(String fileName, String... more) throws InvalidPathException {
      return Paths.get(fileName, more);
   }

   /**
    * Retrieves the specified file from the File System.
    *
    * @param fileName Full path of the File to retrieve from the File System.
    *
    * @return the Path representation of the File.
    *
    * @throws InvalidPathException if the fileName contains an invalid character.
    */
   public File getFile(String fileName) throws InvalidPathException {
      return getPath(fileName).toFile();
   }

   /**
    * Retrieves the specified file from the File System given the parent directory.
    *
    * @param parentFile The parent directory from which to retrieve the file from.
    *
    * @param fileName File name of the File to retrieve from the File System.
    *
    * @return the File representation of the File.
    *
    * @throws InvalidPathException if the fileName contains an invalid character.
    */
   public File getFile(File parentFile, String fileName) throws InvalidPathException {
      return getFile(parentFile.getAbsolutePath(), fileName);
   }

   /**
    * Retrieves the specified file from the File System given the parent directory.
    *
    * @param parent The parent directory from which to retrieve the file from.
    *
    * @param fileName File name of the File to retrieve from the File System.
    *
    * @return the File representation of the File.
    *
    * @throws InvalidPathException if the fileName contains an invalid character.
    */
   public File getFile(String parent, String fileName) throws InvalidPathException {
      return getPath(parent).resolve(fileName).toFile();
   }
}
