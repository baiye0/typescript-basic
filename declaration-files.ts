import axios from "axios";
import calculator from "./caculator";

axios.get("http://www.baidu.com");
axios.post("http://www.baidu.com", { name: "jack" });

calculator("plus", 1, 2);
