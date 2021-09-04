package com.example.catalogservice.messagequeue;

import com.example.catalogservice.domain.CatalogEntity;
import com.example.catalogservice.repository.CatalogRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j

public class KafkaConsumer {
    CatalogRepository catalogRepository;

    @Autowired
    public KafkaConsumer(CatalogRepository catalogRepository) {
        this.catalogRepository = catalogRepository;
    }


    @KafkaListener(topics = "example-catalog-topic")
    public void updateQty(String kafkaMessage) {
        log.info("Kafka Message: ->" + kafkaMessage);

        Map<Object, Object> map = new HashMap<>();

        ObjectMapper mapper = new ObjectMapper();

        try {
            // String 으로 들어오는 Message 를 json 타입으로 변환 하는 코드
            map = mapper.readValue(kafkaMessage, new TypeReference<Map<Object, Object>>() {});
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        // Object 형태로 가져오는걸 String 다운캐스팅 후 파라미터로 전달
        CatalogEntity entity = catalogRepository.findByProductId((String) map.get("productId"));


        if (entity != null) {
            // Object 형태로 가져오는 데이터를 Integer 로 변환후 뺀 후 저장
            entity.setStock(entity.getStock() - (Integer) map.get("qty"));
            catalogRepository.save(entity);
        }
    }
}
