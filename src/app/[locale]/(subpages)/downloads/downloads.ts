
export type DownloadFile = {
    id: string,
    name: string,
    brochureFile?: string,
    userManualFile?: string,
    softwareFile?: string,
    productType: string
}

const downloadFiles : DownloadFile[] = [
    {
        id: "ae300-series-universal-variable-speed-ac-drive",
        name: "AE300 Series Universal Variable Speed AC Drive",
        productType: "Inverter",
        userManualFile: "/files/AE300&AF300 VFD User Manual 20251110.pdf"
    },
    {
        id: "vts-400-series-universal-variable-speed-ac-drive",
        name: "VTS 400 Series Universal Variable Speed AC Drive",
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf",
        softwareFile: "/files/Brochure VTS series book style Inverter Catalog.pdf",
        productType: "Inverter"
    },
    {
        id: "vts30-series-frequency-converter",
        name: "VTS30 Series frequency converter",
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf",
        productType: "Inverter"
    },
    {
        id: "v9-series-high-performance-universal-variable-speed-ac-drive",
        name: "V9 Series High Performance Universal Speed AC Drive",
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        softwareFile: "/files/VTS_V9_Monitor20230531_EN_setup.rar",
        productType: "Inverter"
    },
    
    {
        id: "vc10v-simple-motion-small-plc",
        name: "VC10V Simple Motion Small PLC",
        userManualFile: "/files/VC10V Series PLC Quick Start User Manual.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf",
        softwareFile: "/files/VC Studio(V2.41).rar",
        productType: "PLC"
    },
    {
        id: "vc20-series-high-performance-general-purpose-plc",
        name: "VC20 Series High Performance General Purpose PLC",
        userManualFile: "/files/VC10V Series PLC Quick Start User Manual.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf",
        softwareFile: "/files/VC Studio(V2.41).rar",
        productType: "PLC"
    },
    {
        id: "vt-dp-2000-series-hmi",
        name: "VT DP-2000 series HMI",
        userManualFile: "/files/DP STUDIO USER MANUAL V1.0.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf",
        productType: "HMI"
    },
    {
        id: "vs510-series-servo-drive",
        name: "VS510 Series servo drive",
        userManualFile: "/files/VS510&VS512 Series AC Servo System User Maunal.pdf",
        brochureFile: "/files/VS510&VS512.pdf",
        productType: "Servo Drive"
    },
    {
        id: "vs512-series-servo-drive",
        name: "VS512 Series servo drive",
        userManualFile: "/files/VS510&VS512 Series AC Servo System User Maunal.pdf",
        brochureFile: "/files/VS510&VS512.pdf",
        productType: "Servo Drive"
    }
]


export default downloadFiles;