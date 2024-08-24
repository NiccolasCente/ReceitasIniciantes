import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const pathMappings = {
  "arroz": "/arroz",
  "arroz branco": "/arroz/arroz-branco",
  "arroz integral": "/arroz/arroz-integral",

  "carne": "/carnes",
  "carnes": "/carnes",
  "picanha": "/carnes/picanha",
  "frango": "/carnes/frango",

  "peixe": "/peixes",
  "peixes": "/peixes",
  "peixe tilapia": "/peixes/peixe-tilapia",
  "peixe bacalhau": "/peixes/peixe-bacalhau",

  "sopa": "/sopas",
  "sopas": "/sopas",
  "caldo verde": "/sopas/caldo-verde",
  "sopa de legumes": "/sopas/sopa-de-legumes",

  "macarrao": "/macarrao",
  "macarroes": "/macarrao",  
  "macarrao espaguete ao molho": "/macarrao/macarrao-espaguete-ao-molho",
  "macarrao espaguete ao pesto": "/macarrao/macarrao-espaguete-ao-pesto",

  "doce": "/doces",
  "doces": "/doces",
  "brigadeiro": "/doces/brigadeiro",
  "pudim": "/doces/pudim",

  "bebida": "/bebidas",
  "bebidas": "/bebidas", 
  "suco de laranja": "/bebidas/suco-de-laranja",
};

const SearchLogic = ({ query }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim()) {
      const normalizedQuery = query.toLowerCase().trim();
      const path = pathMappings[normalizedQuery];

      if (path) {
        navigate(path);
      } else {
        navigate("/nao-encontrado");
      }
    }
  }, [query, navigate]);

  return null;
};

export default SearchLogic;
