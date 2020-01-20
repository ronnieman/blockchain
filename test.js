const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1579403986834,
    "transaction": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1579404089655,
    "transaction": [],
    "nonce": 16441,
    "hash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1579404117381,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8b6cf7203a6a11ea82c6112eb42fe400",
    "transactionId": "c8c0e2d03a6a11ea82c6112eb42fe400"
    }
    ],
    "nonce": 20566,
    "hash": "0000c1524ca62746ff23a52bd77b95e489b40a0a2a618db2a4239fdb6fcba7d3",
    "previousBlockHash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285"
    },
    {
    "index": 4,
    "timestamp": 1579404583347,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8b6cf7203a6a11ea82c6112eb42fe400",
    "transactionId": "d93d9ea03a6a11ea82c6112eb42fe400"
    },
    {
    "amount": 10,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "9b7159303a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 100,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "b275d5c03a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 1000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "b7f379803a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 10000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "bbf097c03a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 100000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "bfa9cf303a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 200000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "ca0924d03a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 300000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "d4863ba03a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 400000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "d8c14d403a6b11ea82c6112eb42fe400"
    },
    {
    "amount": 500000,
    "sender": "DHDHEHYEYUEEH475475YRHR848HF",
    "recipient": "JFJUR78U474HGR849EHFHTG84HFJR",
    "transactionId": "dd0d9cf03a6b11ea82c6112eb42fe400"
    }
    ],
    "nonce": 9055,
    "hash": "0000f1be24550249ec59ec4175d4c76a8721746e44bb581dfdd7d355e0f62204",
    "previousBlockHash": "0000c1524ca62746ff23a52bd77b95e489b40a0a2a618db2a4239fdb6fcba7d3"
    },
    {
    "index": 5,
    "timestamp": 1579404750134,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8b6cf7203a6a11ea82c6112eb42fe400",
    "transactionId": "eefa15603a6b11ea82c6112eb42fe400"
    }
    ],
    "nonce": 54933,
    "hash": "0000ad2e3035c14b010f736482fc5539a461f2d207016af17ad64e71b1127ba2",
    "previousBlockHash": "0000f1be24550249ec59ec4175d4c76a8721746e44bb581dfdd7d355e0f62204"
    },
    {
    "index": 6,
    "timestamp": 1579404769756,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8b6cf7203a6a11ea82c6112eb42fe400",
    "transactionId": "52639b803a6c11ea82c6112eb42fe400"
    }
    ],
    "nonce": 81141,
    "hash": "0000b167835025c7be27e9e76cf18acc7f6706a2a45136e7df8df7d8de17747e",
    "previousBlockHash": "0000ad2e3035c14b010f736482fc5539a461f2d207016af17ad64e71b1127ba2"
    }
    ],
    "pendingTransaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8b6cf7203a6a11ea82c6112eb42fe400",
    "transactionId": "5e15fe003a6c11ea82c6112eb42fe400"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };


    console.log ('VALID:', bitcoin.chainIsValid(bc1.chain));