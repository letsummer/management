import express from "express";
import bodyParser from "body-parser";
// import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/customers", (req, res) => {
    res.send([
        {
            'id': 1,
            'img': 'https://picsum.photos/64',
            'name': '홍길동',
            'birth': '961222',
            'gender': '남자',
            'job': '대학생'
            },
            {
            'id': 2,
            'img': 'https://picsum.photos/64',
            'name': '나동빈',
            'birth': '961222',
            'gender': '남자',
            'job': '강사'
            },
            {
            'id': 3,
            'img': 'https://picsum.photos/64',
            'name': '김산타',
            'birth': '231224',
            'gender': '여자',
            'job': '산타'
            },
    ]);
});

app.listen(port, ()=> console.log(`✅ Listening on port ${port}`));