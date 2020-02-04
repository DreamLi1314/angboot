package org.angboot.authority;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AuthorityApplicationTests {

   @Autowired
   DataSource dataSource;

   @Test
   public void contextLoads() throws Exception {
      Assert.assertNotNull("init datasource error.", dataSource);

      Connection connection = dataSource.getConnection();

      try(PreparedStatement preparedStatement = connection.prepareStatement("select * from t_users")) {
         ResultSet resultSet = preparedStatement.executeQuery();
         Assert.assertNotNull("Result is null.", resultSet);
      }
      catch (Exception e) {
         throw e;
      }
      finally {
         connection.close();
      }
   }
}
