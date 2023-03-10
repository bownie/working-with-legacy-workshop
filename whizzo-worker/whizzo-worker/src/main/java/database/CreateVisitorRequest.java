package database;

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

public class CreateVisitorRequest {
  private static final String DB_URL = "jdbc:mariadb://localhost:3306/mydatabase";
  private static final String USERNAME = "username";
  private static final String PASSWORD = "password";

  public static void addRequest(String boat_name, String telephone_number, String expected_arrival, String number_of_nights) throws Exception {
    // Connect to the database
    Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);

    // Make an HTTP GET request to the REST endpoint
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("http://example.com/api/endpoint");
    CloseableHttpResponse response = httpClient.execute(request);

    // Parse the response as JSON
    HttpEntity entity = response.getEntity();
    String jsonString = EntityUtils.toString(entity);
    JSONObject json = new JSONObject(jsonString);

    // Extract the data from the JSON object
    JSONArray data = json.getJSONArray("data");
    List<Map<String, Object>> rows = new ArrayList<>();
    for (int i = 0; i < data.length(); i++) {
      JSONObject row = data.getJSONObject(i);
      Map<String, Object> map = new HashMap<>();
      for (String key : row.keySet()) {
        map.put(key, row.get(key));
      }
      rows.add(map);
    }

    // Insert the data into the MariaDB table
    String tableName = "mytable";
    PreparedStatement ps = conn.prepareStatement("INSERT INTO " + tableName + " SET ? = ?");
    for (Map<String, Object> row : rows) {
      for (String key : row.keySet()) {
        ps.setObject(1, key);
        ps.setObject(2, row.get(key));
        ps.addBatch();
      }
    }
    ps.executeBatch();

    // Close the connections
    ps.close();
    conn.close();
  }
}
