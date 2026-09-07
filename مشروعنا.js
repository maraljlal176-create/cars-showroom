const carsData = [
    {
        id: 1,
        name: "رينج روفر إيفوك",
        brand: "لاند روفر (Land Rover)",
        model: "Range Rover Evoque 2023",
        color: "أبيض",
        country: "المملكة المتحدة (بريطانيا)",
        price: "$55,000",
        rawPrice: 55000,
        image: "رنج روفر.jpg",
        logo: "رنج روفر.jpg"
    },
    {
        id: 2,
        name: "جي إم سي سييرا",
        brand: "جي إم سي (GMC)",
        model: "Sierra Single Cab 2018",
        color: "أسود",
        country: "الولايات المتحدة الأمريكية",
        price: "$42,000",

        rawPrice: 42000,
        image: "جيمس.jpg",
        logo: "جيمس.jpg"
    },
    {
        id: 3,
        name: "لكزس LX 570",
        brand: "لكزس (Lexus)",
        model: "LX 570 Super Sport 2020",
        color: "أبيض لؤلؤي",
        country: "اليابان",
        price: "$95,000",
        rawPrice: 95000,
        image: "لاكسز.jpg",
        logo: "لاكسز.jpg"
    },
    {
        id: 4,
        name: "فيراري لافيراري",
        brand: "فيراري (Ferrari)",
        model: "LaFerrari Aperta",

        color: "أحمر فيراري",
        country: "إيطاليا",
        price: "$3,500,000",
        rawPrice: 3500000,
        image: "فيراري.jpg",
        logo: "فيراري.jpg"
    },
    {
        id: 5,
        name: "تويوتا سوبرا MK4",
        brand: "تويوتا (Toyota)",
        model: "Supra JZA80 (MK4)",
        color: "أبيض",
        country: "اليابان",
        price: "$85,000",
        rawPrice: 85000,
        image: "تويوتا سوبرا mk4.jpg",
        logo: "تويوتا سوبرا mk4.jpg"
    },
    {
        id: 6,

        name: "شفروليه تاهو",
        brand: "شفروليه (Chevrolet)",
        model: "Tahoe LTZ 2018",
        color: "أسود",
        country: "الولايات المتحدة الأمريكية",
        price: "$48,000",
        rawPrice: 48000,
        image: "شافرو لية.jpg",
        logo: "شافرو لية.jpg"
    },
    {
        id: 7,
        name: "تويوتا سوبرا معدلة",
        brand: "تويوتا (Toyota)",
        model: "Supra MK4 Stance Build",
        color: "أبيض",
        country: "اليابان",
        price: "$90,000",
        rawPrice: 90000,
        image: "a2b7f6275d7b06304aa9096e69038bce.jpg",
        logo: "a2b7f6275d7b06304aa9096e69038bce.jpg"
    },
    {
        id: 8,
        name: "دودج تشالنجر هيلكات",
        brand: "دودج (Dodge)",
        model: "Challenger SRT Hellcat Widebody",
        color: "رمادي مع خطوط صفراء",
        country: "الولايات المتحدة الأمريكية",
        price: "$75,000",
        rawPrice: 75000,
        image: "dodge.jpg",
        logo: "dodge.jpg"
    },
    {
        id: 9,
        name: "نيسان جي تي آر R35",
        brand: "نيسان (Nissan)",
        model: "GT-R Nismo / Liberty Walk",

        color: "أسود كربون (Carbon Black)",
        country: "اليابان",
        price: "$180,000",
        rawPrice: 180000,
        image: "نيسان جي تي ار.jpg",
        logo: "نيسان جي تي ار.jpg"
    },
    {
        id: 10,
        name: "تويوتا شاص / لاندكروزر 70",
        brand: "تويوتا (Toyota)",
        model: "Land Cruiser 79 Series Hardtop",
        color: "أبيض بيج",
        country: "اليابان",
        price: "$45,000",
        rawPrice: 45000,
        image: "تويوتا شاص.jpg",
        logo: "تويوتا ربع.jpg"
    },
    {

        id: 11,
        name: "تويوتا كامري",
        brand: "تويوتا (Toyota)",
        model: "Camry 2023",
        color: "أبيض",
        country: "اليابان",
        price: "$28,000",
        rawPrice: 28000,
        image: "كامري.jpg",
        logo: "كامري.jpg"
    },
    {
        id: 12,
        name: "بي إم دبليو الفئة الخامسة",
        brand: "بي إم دبليو (BMW)",
        model: "5 Series (G30) M Sport",
        color: "رمادي مطفي (Matte Grey)",
        country: "ألمانيا",
        price: "$62,000",
        rawPrice: 62000,
        image: "بي ام دابليو.jpg",

        logo: "بي ام دابليو.jpg"
    },
    {
        id: 13,
        name: "تويوتا شاص 2024",
        brand: "تويوتا (Toyota)",
        model: "Land Cruiser 70 Pickup 2024",
        color: "بيج (Beige)",
        country: "اليابان",
        price: "$52,000",
        rawPrice: 52000,
        image: "تويوتا ربع.jpg",
        logo: "تويوتا شاص.jpg"
    },
    {
        id: 14,
        name: "هيونداي توسان",
        brand: "هيونداي (Hyundai)",
        model: "Tucson 2023",
        color: "فضي / رمادي",
        country: "كوريا الجنوبية",

        price: "$30,000",
        rawPrice: 30000,
        image: "هيونداي.jpg",
        logo: "هيونداي.jpg"
    },
    {
        id: 15,
        name: "بوغاتي شيرون Pur Sport",
        brand: "بوغاتي (Bugatti)",
        model: "Chiron Pur Sport",
        color: "فضي مع أسود",
        country: "فرنسا",
        price: "$3,800,000",
        rawPrice: 3800000,
        image: "بوجاتي.jpg",
        logo: "بوجاتي.jpg"
    },
    {
        id: 16,
        name: "نيسان باترول نيسمو",
        brand: "نيسان (Nissan)",

        model: "Patrol Nismo 2022",
        color: "أبيض مع لمسات حمراء",
        country: "اليابان",
        price: "$105,000",
        rawPrice: 105000,
        image: "نيسان باترول.jpg",
        logo: "نيسان باترول.jpg"
    },
    {
        id: 17,
        name: "أودي Q8",
        brand: "أودي (Audi)",
        model: "Q8 S-Line 2023",
        color: "أبيض",
        country: "ألمانيا",
        price: "$78,000",
        rawPrice: 78000,
        image: "اودي.jpg",
        logo: "اودي.jpg"
    },
    {

        id: 18,
        name: "تويوتا لاندكروزر 300",
        brand: "تويوتا (Toyota)",
        model: "Land Cruiser LC300 VX-R",
        color: "أبيض",
        country: "اليابان",
        price: "$90,000",
        rawPrice: 90000,
        image: "مونيكا.jpg",
        logo: "مونيكا.jpg"
    },
    {
        id: 19,
        name: "كاديلات إسكاليد",
        brand: "كاديلاك (Cadillac)",
        model: "Escalade V-Series 2023",
        color: "أسود ملكي",
        country: "الولايات المتحدة الأمريكية",
        price: "$110,000",
        rawPrice: 110000,
        image: "كاديلات.jpg",

        logo: "كاديلات.jpg"
    },
    {
        id: 20,
        name: "مرسيدس برابوس G-Class",
        brand: "مرسيدس (Mercedes-Benz)",
        model: "Brabus 800 / G63 AMG",
        color: "فضي مطفي (Matte Silver)",
        country: "ألمانيا",
        price: "$350,000",
        rawPrice: 350000,
        image: "جي كلاس بينتلي.jpg",
        logo: "جي كلاس بينتلي.jpg"
    }
];

let selectedCar = null;
let currentPurchaseType = 'retail'; // 'retail' or 'wholesale'

// عرض البطاقات في الصفحة

const carsGrid = document.getElementById('carsGrid');

carsData.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.onclick = () => openCarModal(car);

    card.innerHTML = `
        <img src="${car.image}" alt="${car.name}" class="car-image">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p><strong>بلد التصنيع:</strong> ${car.country}</p>
            <p class="price">${car.price}</p>
        </div>
    `;

    carsGrid.appendChild(card);

});

// فتح نافذة تفاصيل السيارة
const modal = document.getElementById('carModal');
const closeModal = document.getElementById('closeModal');
const purchaseForm = document.getElementById('purchaseForm');

function openCarModal(car) {
    selectedCar = car;
    document.getElementById('modalTitle').innerText = car.name;
    document.getElementById('modalBrand').innerText = car.brand;
    document.getElementById('modalModel').i

nnerText = car.model;
    document.getElementById('modalColor').innerText = car.color;
    document.getElementById('modalCountry').innerText = car.country;
    document.getElementById('modalPrice').innerText = car.price;
    document.getElementById('modalLogo').src = car.logo;

    // إعادة ضبط الواجهة
    purchaseForm.style.display = 'none';
    purchaseForm.reset();
    
    modal.style.display = 'flex';
}

// اختيار نوع الشراء (تجزئة / جملة)
function selectPurchaseType(type) {
    currentPurchaseType = type;
    const qtyInput = document.getElementById('carQuantity');
    const discountRow = document.getElementById('discountRow');
    const formTitle = document.getElementById('formTitle');

    if (type === 'wholesale') {
        qtyInput.value = 5; // الحد الأدنى الافتراضي للجملة
        qtyInput.min = 5;
        discountRow.style.display = 'block';
        formTitle.innerText = "بيانات طلب الشراء بالجملة (خصم 5%)";
    } else {
        qtyInput.value = 1;
        qtyInput.min = 1;
        discountRow.style.display = 'none';

        formTitle.innerText = "بيانات طلب الشراء بالتجزئة";
    }

    purchaseForm.style.display = 'block';
    calculateTotal();
}

// حساب السعر والخصم تلقائياً
function calculateTotal() {
    if (!selectedCar) return;

    const quantity = parseInt(document.getElementById('carQuantity').value) || 1;
    const rawTotal = selectedCar.rawPrice * quantity;
    
    let discount = 0;
    if (currentPurchaseType === 'wholesale') {

        discount = rawTotal * 0.05; // خصم 5%
    }

    const finalTotal = rawTotal - discount;

    document.getElementById('rawTotal').innerText = '$' + rawTotal.toLocaleString();
    document.getElementById('discountAmount').innerText = '$' + discount.toLocaleString();
    document.getElementById('finalTotal').innerText = '$' + finalTotal.toLocaleString();
}

// معالجة وحفظ طلب الشراء في قاعدة بيانات متصفح العميل (LocalStorage)
function handlePurchaseSubmit(event) {
    event.preventDefault();


    const orderData = {
        orderId: 'ORD-' + Date.now(),
        carName: selectedCar.name,
        carBrand: selectedCar.brand,
        purchaseType: currentPurchaseType === 'wholesale' ? 'جملة' : 'تجزئة',
        buyerName: document.getElementById('buyerName').value,
        buyerLocation: document.getElementById('buyerLocation').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        quantity: parseInt(document.getElementById('carQuantity').value),
        totalAmount: document.getElementById('finalTotal').innerText,
        date: new Date().toLocaleString('ar-EG')
    };

    // حفظ الطلب في LocalStorage كقاعدة بيانات محلية
    let existingOrders = JSON.parse(localStorage.getItem('carOrders')) || [];
    existingOrders.push(orderData);
    localStorage.setItem('carOrders', JSON.stringify(existingOrders));

    alert(`تم إرسال طلبك بنجاح!\nرقم الطلب: ${orderData.orderId}\nشكراً لتسوقك معنا.`);
    modal.style.display = 'none';
}

closeModal.onclick = () => {
    modal.style.display = 'none';

};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
