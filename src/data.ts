import { OrdersType } from "./types/order";
import { ProductsType } from "./types/product";

export const mock = [
    {
        id: 1,
        name: "THINK AGAIN คิดแล้ว, คิดอีก",
        author: "Adam Grant",
        description: "การคิดเป็นคุณสมบัติที่สำคัญที่สุดของมนุษย์\n หากปราศจากมัน เราย่อมไม่สามารถแก้ปัญหา\n เรียนรู้สิ่งใหม่ หรือแม้แต่สร้างอารยธรรมขึ้นมา\n แต่ขณะเดียวกัน การคิดก็อาจเป็นจุดอ่อนของมนุษย์เราเช่นกัน",
        thumbnail: [
            "https://storage.naiin.com/system/application/bookstore/resource/product/202202/542375/1000246790_front_XXXL.jpg?imgname=THINK-AGAIN-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B5%E0%B8%81",
            "https://storage.naiin.com/system/application/bookstore/resource/product/202202/542375/1000246790_back_XXXL.jpg?imgname=THINK-AGAIN-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B5%E0%B8%81",
        ],
        price: "33575",
        stock: 10,
    } as ProductsType,
    {
        id: 2,
        name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
        author: "Moogwi Kim (คิม มูกี)",
        description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
        thumbnail: [
            "https://storage.naiin.com/system/application/bookstore/resource/product/201805/234965/1000207410_front_XXXL.jpg?imgname=%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-",
            "https://storage.naiin.com/system/application/bookstore/resource/product/201805/234965/1000207410_back_XXXL.jpg?imgname=%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-",
        ],
        price: "20825",
        stock: 20,
    } as ProductsType,
    {
        id: 3,
        name: "ใช้ความคิดเอาชนะโชคชะตา mindset",
        author: "Carol S.Dweck",
        description: "...อะไรในตัวคุณที่สร้างความสำเร็จได้มากกว่า\n ความฉลาด ความสามารถ หรือโชคชะตา?\n คำตอบคือ 'ความคิด' Carol S. Dweck ค้นพบว่าความสำเร็จในชีวิตขึ้นอยู่กับความคิด 2 แบบ\n แบบหนึ่งจะทำให้คุณประสบความสำเร็จแบบครึ่งๆ กลางๆ\n ส่วนอีกแบบจะทำให้คุณพัฒนาแบบก้าวกระโดด และประสบความสำเร็จอย่างต่อเนื่องแม้ว่าคุณจะไม่มีแต้มต่อในชีวิตเลยก็ตาม",
        thumbnail: [
            "https://storage.naiin.com/system/application/bookstore/resource/product/201804/233609/1000206781_front_XXXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B9%82%E0%B8%8A%E0%B8%84%E0%B8%8A%E0%B8%B0%E0%B8%95%E0%B8%B2-mindset",
            "https://storage.naiin.com/system/application/bookstore/resource/product/201804/233609/1000206781_back_XXXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B9%82%E0%B8%8A%E0%B8%84%E0%B8%8A%E0%B8%B0%E0%B8%95%E0%B8%B2-mindset",
        ],
        price: "23375",
        stock: 15,
    } as ProductsType,
    {
        id: 4,
        name: "อย่าเป็นคนเก่งที่คุยไม่เป็น",
        author: "ยาซุดะ ทาดาชิ",
        description: "ทักษะคุยเล่นของคนที่ประสบความสำเร็จระดับโลก จะเป็นแค่คนธรรมดา...หรือคนชั้นแนวหน้าวัดกันที่ “ทักษะ”",
        thumbnail: [
            "https://storage.naiin.com/system/application/bookstore/resource/product/202005/505330/1000232888_front_XXXL.jpg?imgname=%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99",
            "https://storage.naiin.com/system/application/bookstore/resource/product/202005/505330/1000232888_back_XXXL.jpg?imgname=%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99",
        ],
        price: "20900",
        stock: 15,
    } as ProductsType,
    {
        id: 5,
        name: "พลังของคนที่กล้าทำอะไรคนเดียว",
        author: "โกะโด โทคิโอะ (Tokio Godo)",
        description: "อยู่กับตัวเองได้ ทำอะไรคนเดียวเป็น คือทักษะสำคัญของคนที่รู้จักตัวเอง\n มีเสน่ห์ และสร้างสรรค์ ตรงกันข้าม คนที่ต้องอยู่กับคนอื่นตลอดเวลาจะไม่มีวันได้รู้จักตัวเองจริงๆ\n ซ้ำยังเสียเวลาชีวิตไปกับสิ่งที่ไม่สำคัญ",
        thumbnail: [
            "https://storage.naiin.com/system/application/bookstore/resource/product/202006/506377/1000233141_front_XXXL.jpg?imgname=%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B3%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7",
            "https://storage.naiin.com/system/application/bookstore/resource/product/202006/506377/1000233141_back_XXXL.jpg?imgname=%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B3%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7",
        ],
        price: "20205",
        stock: 15,
    } as ProductsType,
] as ProductsType[]

export const mockOrder = [
    {
        id: 1,
        products: [
            {
                id: 1,
                name: "THINK AGAIN คิดแล้ว, คิดอีก",
                author: "Adam Grant",
                description: "การคิดเป็นคุณสมบัติที่สำคัญที่สุดของมนุษย์\n หากปราศจากมัน เราย่อมไม่สามารถแก้ปัญหา\n เรียนรู้สิ่งใหม่ หรือแม้แต่สร้างอารยธรรมขึ้นมา\n แต่ขณะเดียวกัน การคิดก็อาจเป็นจุดอ่อนของมนุษย์เราเช่นกัน",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/202202/542375/1000246790_front_XXXL.jpg?imgname=THINK-AGAIN-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B5%E0%B8%81",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/201805/234965/1000207410_front_XXXL.jpg?imgname=%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-",
                price: "20825",
                quantity: 2,

            },
        ],
        totalPrice: "549300",
        status: "OPEN",
        typePayment: 3,
        createdAt: "",
        approvedAt: "",
        cancelledAt: "",
    },
    {
        id: 2,
        products: [
            {
                id: 1,
                name: "THINK AGAIN คิดแล้ว, คิดอีก",
                author: "Adam Grant",
                description: "การคิดเป็นคุณสมบัติที่สำคัญที่สุดของมนุษย์\n หากปราศจากมัน เราย่อมไม่สามารถแก้ปัญหา\n เรียนรู้สิ่งใหม่ หรือแม้แต่สร้างอารยธรรมขึ้นมา\n แต่ขณะเดียวกัน การคิดก็อาจเป็นจุดอ่อนของมนุษย์เราเช่นกัน",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/202202/542375/1000246790_front_XXXL.jpg?imgname=THINK-AGAIN-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B5%E0%B8%81",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/201805/234965/1000207410_front_XXXL.jpg?imgname=%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-",
                price: "20825",
                quantity: 2,

            },
        ],
        totalPrice: "743900",
        status: "OPEN",
        typePayment: 1,
        createdAt: "",
        approvedAt: "",
        cancelledAt: "",
    },
    {
        id: 3,
        products: [
            {
                id: 1,
                name: "THINK AGAIN คิดแล้ว, คิดอีก",
                author: "Adam Grant",
                description: "การคิดเป็นคุณสมบัติที่สำคัญที่สุดของมนุษย์\n หากปราศจากมัน เราย่อมไม่สามารถแก้ปัญหา\n เรียนรู้สิ่งใหม่ หรือแม้แต่สร้างอารยธรรมขึ้นมา\n แต่ขณะเดียวกัน การคิดก็อาจเป็นจุดอ่อนของมนุษย์เราเช่นกัน",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/202202/542375/1000246790_front_XXXL.jpg?imgname=THINK-AGAIN-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B5%E0%B8%81",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/201805/234965/1000207410_front_XXXL.jpg?imgname=%E0%B8%88%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-",
                price: "20825",
                quantity: 2,

            },
        ],
        totalPrice: "25400",
        status: "SUCCESS",
        typePayment: 3,
        createdAt: "",
        approvedAt: "",
        cancelledAt: "",
    },
    {
        id: 3,
        products: [
            {
                id: 3,
                name: "ใช้ความคิดเอาชนะโชคชะตา mindset",
                author: "Carol S.Dweck",
                description: "...อะไรในตัวคุณที่สร้างความสำเร็จได้มากกว่า\n ความฉลาด ความสามารถ หรือโชคชะตา?\n คำตอบคือ 'ความคิด' Carol S. Dweck ค้นพบว่าความสำเร็จในชีวิตขึ้นอยู่กับความคิด 2 แบบ\n แบบหนึ่งจะทำให้คุณประสบความสำเร็จแบบครึ่งๆ กลางๆ\n ส่วนอีกแบบจะทำให้คุณพัฒนาแบบก้าวกระโดด และประสบความสำเร็จอย่างต่อเนื่องแม้ว่าคุณจะไม่มีแต้มต่อในชีวิตเลยก็ตาม",
                thumbnail: "https://storage.naiin.com/system/application/bookstore/resource/product/201804/233609/1000206781_front_XXXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B9%82%E0%B8%8A%E0%B8%84%E0%B8%8A%E0%B8%B0%E0%B8%95%E0%B8%B2-mindset",
                price: "23375",
                quantity: 2,

            },
        ],
        totalPrice: "25400",
        status: "CANCELLED",
        typePayment: 2,
        createdAt: "",
        approvedAt: "",
        cancelledAt: "",
    },
] as OrdersType[]