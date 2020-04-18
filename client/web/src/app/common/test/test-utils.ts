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

/**
 * Namespace that provides utility methods that are useful in developing unit tests.
 */
export namespace TestUtils {

   export function toString(localStr: string): string {
      let str = localStr.slice(localStr.indexOf("(") + 1, localStr.lastIndexOf(")"));

      if(str.startsWith("js:")) {
         str = str.substring(3);
      }

      return str;
   }
}
