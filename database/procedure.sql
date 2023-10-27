DELIMITER $$
DROP PROCEDURE IF IEXISTS 'spInsere' $$
CREATE  PROCEDURE 'spInsere'(IN n VARCHAR(100)), IN R VARCHAR(100))
BEGIN
	DECLARE excessao SMALLINT DEFAULT 0;
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET excessao =1;
	
	IF(N <> "" AND R <> "") THEN 
		START TRANSACTION;
		INSERT INTO cliente VALUES(null, n);
			IF excessao = 1
				THEN
				SELECT 'Erro ao inserir na tabela cliente' AS Msg;
				ROOLBACK;
			ELSE
			SELECT DISTINCT  LAST_INSERT_ID() INTO @idCliente FROM cliente;
			IF excessao = 1
				THEN
				SELECT 'Erro ao selecionar o ultimo ID inserido' AS Msg;
				ROOLBACK;
			ELSE
			INSERT  INTO endereco VALUES(null, @idCliente, r);
			IF excessao = 1
				THEN
				SELECT  'Erro ao inserir na tabela endereco' AS Msg;
				ROOLBACK;
			ELSE
			SELECT 'Cadastro efetuado com sucesso' AS Msg;
				COMMIT;
			END IF;
		END IF;
	END IF;
	ELSE
		SELECT 'Parametros necessarios' AS Msg;
	END IF;
		
END $$ 
DELIMITER;
