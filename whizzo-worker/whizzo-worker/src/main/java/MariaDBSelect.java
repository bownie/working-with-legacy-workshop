package mariadb;
// Generated by ChatGPT
//

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

public class MariaDBSelect {

  private static final String DB_HOST = System.getenv("DATABASE_HOST");
  private static final String DB_PORT = System.getenv("DATABASE_PORT");
  private static final String DB_USER = System.getenv("DATABASE_USER");
  private static final String DB_DB = System.getenv("DATABASE_DB");
  private static final String DB_PASS = System.getenv("DATABASE_PASSWORD");

  private static final String DB_URL = "jdbc:mariadb://localhost:" + DB_PORT + "/" + DB_DB;

  public static void connect(String[] args) throws Exception {

    System.out.println("DB connection string = " + DB_URL);

    // Connect to the database
    Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);

    // Make an HTTP GET request to the REST endpoint
    //CloseableHttpClient httpClient = HttpClients.createDefault();
    //HttpGet request = new HttpGet("http://example.com/api/endpoint");
    //CloseableHttpResponse response = httpClient.execute(request);

    // Parse the response as JSON
    //HttpEntity entity = response.getEntity();
    //String jsonString = EntityUtils.toString(entity);
    //JSONObject json = new JSONObject(jsonString);

    // Extract the data from the JSON object
    //JSONArray data = json.getJSONArray("data");
    //List<Map<String, Object>> rows = new ArrayList<>();
    //for (int i = 0; i < data.length(); i++) {
    //  JSONObject row = data.getJSONObject(i);
    //  Map<String, Object> map = new HashMap<>();
    //  for (String key : row.keySet()) {
    //    map.put(key, row.get(key));
    //  }
    //  rows.add(map);
    //}

    // Insert the data into the MariaDB table
    String tableName = "wb_marina";
    PreparedStatement ps = conn.prepareStatement("select * from  " + tableName);
    /*
    for (Map<String, Object> row : rows) {
      for (String key : row.keySet()) {
        ps.setObject(1, key);
        ps.setObject(2, row.get(key));
        ps.addBatch();
      }
    }*/
    ps.executeBatch();

    // Close the connections
    ps.close();
    conn.close();
  }
}
