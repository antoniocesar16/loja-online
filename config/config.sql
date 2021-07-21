CREATE TABLE dropshippping(
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(1000),
    nome_forncecedor VARCHAR(1000),
    nome_produto VARCHAR(255),
    img_path VARCHAR(255),
    tipo int 
    -- se for maior que zero é dropshipping
)