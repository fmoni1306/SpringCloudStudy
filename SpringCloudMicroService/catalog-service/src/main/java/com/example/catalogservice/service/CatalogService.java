package com.example.catalogservice.service;

import com.example.catalogservice.domain.CatalogEntity;


public interface CatalogService {

    Iterable<CatalogEntity> getAllCatalog();

}
