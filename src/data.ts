import { OrdersType } from "./types/order";
import { ProductsType } from "./types/product";

export const mock = [
    {
        id: 1,
        name: "THINK AGAIN คิดแล้ว, คิดอีก",
        author: "Adam Grant",
        description: "การคิดเป็นคุณสมบัติที่สำคัญที่สุดของมนุษย์\n หากปราศจากมัน เราย่อมไม่สามารถแก้ปัญหา\n เรียนรู้สิ่งใหม่ หรือแม้แต่สร้างอารยธรรมขึ้นมา\n แต่ขณะเดียวกัน การคิดก็อาจเป็นจุดอ่อนของมนุษย์เราเช่นกัน",
        thumbnail: [
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_4.png",
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
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_4.png",
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
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
            "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_4.png",
        ],
        price: "23375",
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
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
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
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
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
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
                price: "33575",
                quantity: 1,
            },
            {
                id: 2,
                name: "จงเป็นคนฉลาดที่บริษัทขาดไม่ได้",
                author: "Moogwi Kim (คิม มูกี)",
                description: "เมื่อก้าวสู่การเป็นผู้นำ เทคนิคที่จำเป็นอย่างยิ่งคือ\n การส่งเสริมลูกน้องเห็นอกเห็นใจผู้อื่น และเป็นบุคคลต้นแบบ\n และหมุดหมายสุดท้ายของการทำงานและใช้ชีวิตก็คือ\n การเตรียมพร้อมผู้อื่นเพื่อให้ทำงานแทนตนเองได้\n เพื่อให้องค์กรยังขับเคลื่อนต่อไป\n คิม มูกี ถ่ายทอดผ่านบทเรียน 77 ข้อที่จะเปลี่ยนให้คุณเป็นคนฉลาดจนบริษัทขาดคนอย่างคุณไม่ได้",
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
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
                thumbnail: "https://storage.googleapis.com/ksl-stg-marketplace/1/4/Shirt_KSL_16_3.png",
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