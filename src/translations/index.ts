// Re-export English translations as the type definition
export const en = {
  common: {
    appName: "LoanCheck",
    reset: "Reset",
    submit: "Predict Loan",
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },
  header: {
    apiStatus: "API Status",
    apiOnline: "API Online",
    apiOffline: "API Offline",
  },
  hero: {
    title: "Loan Eligibility Prediction",
    description:
      "Predict your loan eligibility using machine learning. Enter your financial details below to get a prediction.",
  },
  form: {
    labels: {
      accountBalance: "Account Balance",
      durationOfCredit: "Duration of Credit",
      valueSavingsStocks: "Value of Savings / Stocks",
      creditAmount: "Credit Amount",
      ageInYears: "Age (Years)",
      numberOfExistingCredits: "Number of Existing Credits",
      employmentSince: "Employment Since",
      foreignWorker: "Foreign Worker",
      installmentRate: "Installment Rate",
      maritalStatus: "Marital Status",
      numberOfDependents: "Number of Dependents",
      jobStatus: "Job Status",
      propertyMagnitude: "Property Magnitude",
      otherPartyDebt: "Other Party Debt",
      housingStatus: "Housing Status",
      yearsAtCurrentAddress: "Years at Current Address",
    },
    placeholders: {
      durationOfCredit: "e.g. 18",
      creditAmount: "e.g. 2000",
      ageInYears: "e.g. 35",
      numberOfExistingCredits: "e.g. 2",
      installmentRate: "e.g. 4",
      numberOfDependents: "e.g. 1",
      yearsAtCurrentAddress: "e.g. 3",
    },
    units: {
      months: "months",
      dm: "DM",
      percentage: "%",
    },
    descriptions: {
      accountBalance:
        "Status of the applicant's checking account based on current balance.",
      durationOfCredit: "Requested loan repayment period in months.",
      valueSavingsStocks:
        "Total value of applicant's savings accounts and/or stock holdings.",
      creditAmount: "Total loan amount being requested by the applicant.",
      ageInYears: "Applicant's age in years at the time of application.",
      numberOfExistingCredits:
        "Number of active credit accounts held by the applicant.",
      employmentSince:
        "Years the applicant has been in current employment position.",
      foreignWorker:
        "Whether the applicant is a foreign worker or national resident.",
      installmentRate:
        "Ratio of monthly installment to annual disposable income.",
      maritalStatus: "Current marital status of the applicant.",
      numberOfDependents: "Number of dependents for tax purposes.",
      jobStatus: "Classification of applicant's employment status.",
      propertyMagnitude:
        "Applicant's home ownership and property value classification.",
      otherPartyDebt:
        "Whether applicant is guarantor for another person's debt.",
      housingStatus: "Current housing tenure status (rent, own, free).",
      yearsAtCurrentAddress:
        "Length of time applicant has resided at current address.",
    },
    options: {
      accountBalance: {
        "1": "1 — Negative (< 0 DM)",
        "2": "2 — Low (0 – 200 DM)",
        "3": "3 — Stable (≥ 200 DM / Salary)",
        "4": "4 — No Account",
      },
      valueSavingsStocks: {
        "1": "1 — Very Low (< 100 DM)",
        "2": "2 — Low (100 – 500 DM)",
        "3": "3 — Moderate (500 – 1000 DM)",
        "4": "4 — High (≥ 1000 DM)",
        "5": "5 — Unknown / No Savings",
      },
      employmentSince: {
        "1": "1 — Unemployed",
        "2": "2 — < 1 Year",
        "3": "3 — 1 – 4 Years",
        "4": "4 — ≥ 4 Years",
      },
      foreignWorker: {
        "1": "Yes",
        "2": "No",
      },
      maritalStatus: {
        "1": "Single",
        "2": "Divorced",
        "3": "Married",
        "4": "Widowed",
      },
      jobStatus: {
        "1": "Unemployed / Unskilled",
        "2": "Unskilled Worker",
        "3": "Skilled Worker",
        "4": "Official / Management",
      },
      propertyMagnitude: {
        "1": "Real Estate",
        "2": "Building Society",
        "3": "Car",
        "4": "Unknown / No Property",
      },
      otherPartyDebt: {
        "1": "Yes",
        "2": "No",
      },
      housingStatus: {
        "1": "Rent",
        "2": "Own",
        "3": "Free",
      },
    },
  },
  validation: {
    fieldRequired: "This field is required",
    invalidNumber: "Please enter a valid number",
    minValue: "Value must be at least {min}",
    maxValue: "Value must not exceed {max}",
    emailInvalid: "Please enter a valid email address",
  },
  prediction: {
    good: "Good",
    bad: "Bad",
    probability: "Probability",
    confidence: "Confidence",
    result: "Prediction Result",
    goodLoans: "Good Loans",
    badLoans: "Bad Loans",
    summary:
      "Based on your financial profile, your loan application is predicted as {prediction}.",
    goodMessage:
      "Your financial profile indicates strong likelihood of loan approval. You are considered a low-risk borrower.",
    badMessage:
      "Your financial profile indicates potential challenges in loan approval. You may be considered a higher-risk borrower.",
    disclaimer:
      "This prediction is based on historical data and machine learning models. Actual loan decisions are made by financial institutions and may differ from this prediction.",
  },
  apiError: {
    title: "API Error",
    message: "Failed to connect to prediction API",
    retry: "Please try again",
  },
  messages: {
    predictionSuccess: "Prediction: {prediction} ({confidence}% confidence)",
    predictionFailed: "Prediction failed. Please try again.",
  },
};

export const id = {
  common: {
    appName: "LoanCheck",
    reset: "Ulang",
    submit: "Prediksi Pinjaman",
    loading: "Memuat...",
    error: "Kesalahan",
    success: "Berhasil",
  },
  header: {
    apiStatus: "Status API",
    apiOnline: "API Online",
    apiOffline: "API Offline",
  },
  hero: {
    title: "Prediksi Kelayakan Pinjaman",
    description:
      "Prediksi kelayakan pinjaman Anda menggunakan machine learning. Masukkan detail keuangan Anda di bawah untuk mendapatkan prediksi.",
  },
  form: {
    labels: {
      accountBalance: "Saldo Rekening",
      durationOfCredit: "Durasi Kredit",
      valueSavingsStocks: "Nilai Tabungan / Saham",
      creditAmount: "Jumlah Kredit",
      ageInYears: "Usia (Tahun)",
      numberOfExistingCredits: "Jumlah Kredit yang Ada",
      employmentSince: "Bekerja Sejak",
      foreignWorker: "Pekerja Asing",
      installmentRate: "Tingkat Cicilan",
      maritalStatus: "Status Perkawinan",
      numberOfDependents: "Jumlah Tanggungan",
      jobStatus: "Status Pekerjaan",
      propertyMagnitude: "Besaran Properti",
      otherPartyDebt: "Hutang Pihak Lain",
      housingStatus: "Status Perumahan",
      yearsAtCurrentAddress: "Tahun di Alamat Saat Ini",
    },
    placeholders: {
      durationOfCredit: "mis. 18",
      creditAmount: "mis. 2000",
      ageInYears: "mis. 35",
      numberOfExistingCredits: "mis. 2",
      installmentRate: "mis. 4",
      numberOfDependents: "mis. 1",
      yearsAtCurrentAddress: "mis. 3",
    },
    units: {
      months: "bulan",
      dm: "DM",
      percentage: "%",
    },
    descriptions: {
      accountBalance:
        "Status rekening giro pemohon berdasarkan saldo saat ini.",
      durationOfCredit:
        "Periode pembayaran kembali pinjaman yang diminta dalam bulan.",
      valueSavingsStocks:
        "Nilai total rekening tabungan dan/atau saham yang dimiliki pemohon.",
      creditAmount: "Jumlah total pinjaman yang diminta oleh pemohon.",
      ageInYears: "Usia pemohon dalam tahun pada saat aplikasi.",
      numberOfExistingCredits:
        "Jumlah akun kredit aktif yang dimiliki pemohon.",
      employmentSince: "Tahun pemohon bekerja di posisi pekerjaan saat ini.",
      foreignWorker:
        "Apakah pemohon adalah pekerja asing atau penduduk nasional.",
      installmentRate:
        "Rasio cicilan bulanan terhadap pendapatan tahunan yang dapat dibuang.",
      maritalStatus: "Status perkawinan saat ini pemohon.",
      numberOfDependents: "Jumlah tanggungan untuk keperluan pajak.",
      jobStatus: "Klasifikasi status pekerjaan pemohon.",
      propertyMagnitude:
        "Kepemilikan rumah dan klasifikasi nilai properti pemohon.",
      otherPartyDebt: "Apakah pemohon adalah penjamin untuk hutang orang lain.",
      housingStatus:
        "Status kepemilikan perumahan saat ini (sewa, milik, gratis).",
      yearsAtCurrentAddress: "Lamanya pemohon tinggal di alamat saat ini.",
    },
    options: {
      accountBalance: {
        "1": "1 — Negatif (< 0 DM)",
        "2": "2 — Rendah (0 – 200 DM)",
        "3": "3 — Stabil (≥ 200 DM / Gaji)",
        "4": "4 — Tidak Ada Rekening",
      },
      valueSavingsStocks: {
        "1": "1 — Sangat Rendah (< 100 DM)",
        "2": "2 — Rendah (100 – 500 DM)",
        "3": "3 — Sedang (500 – 1000 DM)",
        "4": "4 — Tinggi (≥ 1000 DM)",
        "5": "5 — Tidak Diketahui / Tanpa Tabungan",
      },
      employmentSince: {
        "1": "1 — Menganggur",
        "2": "2 — < 1 Tahun",
        "3": "3 — 1 – 4 Tahun",
        "4": "4 — ≥ 4 Tahun",
      },
      foreignWorker: {
        "1": "Ya",
        "2": "Tidak",
      },
      maritalStatus: {
        "1": "Lajang",
        "2": "Bercerai",
        "3": "Menikah",
        "4": "Janda",
      },
      jobStatus: {
        "1": "Menganggur / Tidak Terampil",
        "2": "Pekerja Tidak Terampil",
        "3": "Pekerja Terampil",
        "4": "Pejabat / Manajemen",
      },
      propertyMagnitude: {
        "1": "Real Estat",
        "2": "Asosiasi Pembangunan",
        "3": "Mobil",
        "4": "Tidak Diketahui / Tanpa Properti",
      },
      otherPartyDebt: {
        "1": "Ya",
        "2": "Tidak",
      },
      housingStatus: {
        "1": "Sewa",
        "2": "Milik",
        "3": "Gratis",
      },
    },
  },
  validation: {
    fieldRequired: "Bidang ini wajib diisi",
    invalidNumber: "Silakan masukkan angka yang valid",
    minValue: "Nilai harus minimal {min}",
    maxValue: "Nilai tidak boleh melebihi {max}",
    emailInvalid: "Silakan masukkan alamat email yang valid",
  },
  prediction: {
    good: "Baik",
    bad: "Buruk",
    probability: "Probabilitas",
    confidence: "Kepercayaan",
    result: "Hasil Prediksi",
    goodLoans: "Pinjaman Baik",
    badLoans: "Pinjaman Buruk",
    summary:
      "Berdasarkan profil keuangan Anda, aplikasi pinjaman Anda diprediksi sebagai {prediction}.",
    goodMessage:
      "Profil keuangan Anda menunjukkan kemungkinan tinggi persetujuan pinjaman. Anda dianggap peminjam berisiko rendah.",
    badMessage:
      "Profil keuangan Anda menunjukkan tantangan potensial dalam persetujuan pinjaman. Anda mungkin dianggap peminjam berisiko lebih tinggi.",
    disclaimer:
      "Prediksi ini didasarkan pada data historis dan model pembelajaran mesin. Keputusan pinjaman sebenarnya dibuat oleh lembaga keuangan dan dapat berbeda dari prediksi ini.",
  },
  apiError: {
    title: "Kesalahan API",
    message: "Gagal terhubung ke API prediksi",
    retry: "Silakan coba lagi",
  },
  messages: {
    predictionSuccess: "Prediksi: {prediction} ({confidence}% kepercayaan)",
    predictionFailed: "Prediksi gagal. Silakan coba lagi.",
  },
};
