import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CtMenu.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { pointerIcon } from "../../shared/ui-components/icon-handler/index";
import { VOCategories } from "../../shared/models/categories.model";

const CtMenu: React.FC = () => {
  const [categories, setCategories] = useState<VOCategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cms/get-categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ group_key: "product_cat" }),
        });

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="menu dsfx fx-d-c f-gap-16px mt-40px">
        {categories.map((item, index) => (
          <Link
            key={index}
            className="dsfx fx-j-sb fx-ai-c title-16px col-tx2 svg-trp svg-hov-btn2 cursor-pointer menu-option"
            to={item.key}
          >
            {item.name}
            <IconHandler
              className="svg-btn"
              path={pointerIcon}
              iconSize="16x16"
            />
          </Link>
        ))}
      </div>
      <div className="ver-div bg-col-tx1"></div>
    </>
  );
};

export default CtMenu;
