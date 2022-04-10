package com.yz.oa;

import com.yz.oa.utils.encryptionAndDecryption.Aes;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OaApplicationTests {

    @Test
    void contextLoads() {
        byte[] bytes = Aes.encrypt("123");
        String s = Aes.decrypt(bytes);
        System.out.println(s+"----");
    }

}
