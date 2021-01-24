import {
  CollectionsById,
  Furniture,
  FurnitureCollections,
} from './FurnitureCollections.types';

// TODO - temp mocks data
export const furnitureCollections: FurnitureCollections = {
  bench: [
    {
      cost: null,
      description: `изготавливаются по размеру заказчика`,
      id: `000001`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cl5ufeJOsDsFwYq8V1Lw3yjuE53bcdKgZPNC0bAYNpMkEco-Lg9kAvLQ6zjXjgyWdrhnIX1on2Nl__xay-t-uq1YTkAIAsFiql-vmbS0LDEPPNV2nC_CDujil6GkmvOYipvdLUGXGgU074wN7gH_LT=w366-h340-no?authuser=0',
      ],
      lot: 'Банкетка 1 мест',
      miniDescription: `изготавливаются по размеру заказчика`,
      tittle: `Банкетка`,
    },
    {
      cost: null,
      description: `изготавливаются по размеру заказчика`,
      id: `000002`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cD1KybH7RcfOnTuK7UZOHG9DsNHEW6x9YG4UYOF4hSYI9uP9FQCuf_U_IJ-LQ-LtW6MXFA_VMjIJIlOAGoGcCvLn7uAzKhP19OTvo8P6eusDekEHbjUbBY4zLKj-vIJeGd2nBMgfLzpcwpihpYIuZO=w406-h329-no?authuser=0',
      ],
      lot: 'Банкетка 2 мест',
      miniDescription: `изготавливаются по размеру заказчика`,
      tittle: `Банкетка 2`,
    },
    {
      cost: null,
      description: `изготавливаются по размеру заказчика`,
      id: `000003`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3dyM10Em_q88twfHSuHYLXugkOaAdpYsT6HweJsSG2JKqKOx0JN0vlER7glsk0hmGOg2xD1yimyN9EHuLTdCIwb-p_dUqaOPr7W-e5KCy1S1eLu-BD2VzMvzystGCo2aFL9qMK_bY1Rrx04O3CGz6Py=w473-h387-no?authuser=0',
      ],
      lot: 'Банкетка 2 мест',
      miniDescription: `изготавливаются по размеру заказчика`,
      tittle: `Банкетка 2`,
    },
    {
      cost: null,
      description: `изготавливаются по размеру заказчика`,
      id: `000004`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3eK2j_Dvne9_hshmHS2q9abG2jTYK8vttAaWp0FiExaEDkKDGOiNkAtEAaQq88__1WICpw2bULgTTNzCQOUP65KV8pBOZTlDbb_M26XUHbOPillcLkqUr2FmuGM3TFQz97ixaRYTTJgTdjMSM1F4s3k=w525-h337-no?authuser=0',
      ],
      lot: 'Банкетка 3 мест',
      miniDescription: `изготавливаются по размеру заказчика`,
      tittle: `Банкетка 3`,
    },
  ],

  'chair-bed': [
    {
      cost: 475,
      description: ``,
      id: `000005`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3fDgQWQ6_ADSShT-9a1XMWMnQvFvm0Iw5T53C32HsD_OJ1uPh2EufccJ0zfGb68AzKtSg3KVOvOfIdBnZs74x2HDzJIAgHNb24KET44_QI5L_p01USwxqRdZt6Ljysl8cv7asuHvuUqHSWtsLeZRjxu=w1160-h870-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3dawto-XQ9edqGEkyzEwtfyqpgjysE3O-r3YUQ51Q7G26gPz66XKWi2TyUSKLHH6Wh8DwdDsKw7ceaod1kpDj6KQkf8BA1X7_bESR6e4gbfeLYyExgnGszAoR4mk_qge_fcbDlZdW547Zbd7uqGBMC_=w1160-h870-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3cmgHllMzB6WT9JSycm--lJwIEjukunrWvCBu5dJSWEOueu7p4Wz86DiEfz9ebXLgV8GHLOKuseA4qAgvnuxdDSy27OTl-rV0MoAVU2isVa3pMWgdAzfoMK2vbfzOdj1Vx7pFemPA7yNJRbT0HY_aen=w653-h870-no?authuser=0',
      ],
      lot: 'Лада К/К',
      miniDescription: ``,
      tittle: `Кресло-кровать из гарнитуры м/м "Лада"`,
    },
    {
      cost: 330,
      description: ``,
      id: `000006`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3epWu_qwL3k9vYuelffK91Uw99X1MWtQA2rznx_bHyiRIWLydGSstiXnQltLN7d0FFW1dhP_bFebzBXJo1ko8EfvYFvXi3eTRzVURv1ZFLmILtlQI1iW4OLB41mSPNabfuaHKY_qpZzfPARh23KIBku=w313-h336-no?authuser=0',
      ],
      lot: 'Майский кр',
      miniDescription: ``,
      tittle: `Кресло для отдыха к угловому дивану "Майский"`,
    },
  ],

  'corner-sofa': [
    {
      cost: 920,
      description: `Размеры (типовые)
      - габаритный размер 275х175 см.
      - спальное место 215х120 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок. Исполнение по расположению секций может быть как правое так и левое.
      
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП. Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является поролон повышенной жесткости и плотности. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «дельфин», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения нижнего элемента (передней планки) вперед и поднятием вверх спального места, расположенного внутри выдвижного элемента.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000007`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cNL-0-YFDrM04bLXhC7xqk_RvvBNecniJkF8So3RLAF2HSn4v4501Z61lMo1htwpwcvcTVLcrHQuKEMIYho3gfyy-CfJXL_CkD_NxOEkP9SkT7mfnnuBPbtAZkeB6qvGFBV67maUNxjTMeGFjhG31E=w612-h408-no?authuser=0',
      ],
      lot: 'Майский',
      miniDescription: `Размеры (типовые)
      - габаритный размер 275х175 см.
      - спальное место 215х120 см.`,
      tittle: `Угловой диван «Майский»`,
    },

    {
      cost: 920,
      description: `Размеры (типовые)
      - габаритный размер 230х150 см.
      - спальное место 200х125 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок. Исполнение по расположению секций может быть как правое так и левое.
      
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП. Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является поролон повышенной жесткости и плотности. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «дельфин», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения нижнего элемента (передней планки) вперед и поднятием вверх спального места, расположенного внутри выдвижного элемента. В боковой секции размещена секция для хранения спальных принадлежностей, с помощью механизма подъема она поднимается вверх.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000008`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3eFf6zJvJthI0GBKri0gRFz42zix_Llju_fVk2yNxmSfZgfWiwnIfukN6IV0ZbSqKSGOpMAEGftNqBNlB_yBhTVsZDcHfz7mKkVRGC2dbW19B8T5xvhNdbRWiiwBX0HIuyXwSCIvoSMrk_4cBNAypMH=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3fH9tvulJwyBgmun1sqbsYrFEa4C8VoK3TvadUuX8cze-oby5FW5kcsBTDqdZVD6du_iXj40NJoS_wdYmsmtso1tu7dc-stZVkTfxUYAFye-Q262rOKRTKtxagsmUxEsbBci_47x9tWIkKK9cPUvJa0=w577-h433-no?authuser=0',
      ],
      lot: 'Универсал',
      miniDescription: `Размеры (типовые)
      - габаритный размер 230х150 см.
      - спальное место 200х125 см.`,
      tittle: `Угловой диван "Универсал"`,
    },

    {
      cost: 990,
      description: `Размеры (типовые)
      - габаритный размер 230х150 см.
      - спальное место 200х125 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок. Исполнение по расположению секций может быть как правое так и левое.
      
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП. Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является поролон повышенной жесткости и плотности. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «дельфин», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения нижнего элемента (передней планки) вперед и поднятием вверх спального места, расположенного внутри выдвижного элемента. В боковой секции размещена секция для хранения спальных принадлежностей, с помощью механизма подъема она поднимается вверх.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000009`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3dJHyja67c6rHGvUk7lvhXchhzeFoRprY7zPG489G8NDIgmB6-HNulzrsarPfYubGWYLfteaEMcEezAu6hh7dv3tUmVVsuKLXl0SdXz29zQdKf9KE8veIGO-QaQAWWAOXxDR3JLvL7D18nNYs9Un6QA=w577-h433-no?authuser=0',
      ],
      lot: 'Универсал наклад',
      miniDescription: `Размеры (типовые)
      - габаритный размер 230х150 см.
      - спальное место 200х125 см.`,
      tittle: `Угловой диван "Универсал"`,
    },

    {
      cost: 1120,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000010`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3eOwcEeCBQC19LRVILuRhaUFj-6NWkwmMNxxs7SD8TSk8kBKTJzTBJn3qGuou3jTJf_Vc8iVBBUrcQ6N9bokOvkiBmoAUo4S0lASGiUpHRcb7IHkPwSmSLfh4obXXjxNk8VuZNbdzJnMpLXF0Cd3aUT=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
    {
      cost: 1120,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000011`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3d8HcjwI3zBeJrFQEgyvh7Y7htsODTW0WkJo3zrd7hQEQ78UuDlSYerfgwMfVfZ5Yzk8diPdEFqPQoF0dXtZbGttf-iEW_UX_zHHLF-lZMTLy9unM2dI9AUsiH45AvyJ4iPYyHFRfP99NE9IWhoMXkg=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
    {
      cost: 1120,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000012`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cHDbkMbHKBiLqE_EPUHEBVI49HOU8jRi-aWYq3rNUefTGv6xVRc17s3KnXIJsZ88k0dCNaLLjki1sQwRVfYzB9hXtHV1ivQCEzeyt5nxYaz8f1Dt1S_02UuFgpJEwckEwTa1eYq8vCzVpWuCim8gNg=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
    {
      cost: 1120,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000013`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3emlerAnW3BCV7PNnDQ7F6PMzfVq28VyjgQIb9inT6sqlIzG31DWGJxQhFbcBuQthKeb5PhpiKA5l2jQkWjt3Hx08zdRRTCIe9IpI5QyEC1wQMY8TOFaa80SDweMJlHN5TrnVQQzR1xiOBjTQULlTTw=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
    {
      cost: 1060,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000014`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3ceW6uGMmOdnvhk7E4noNylpdlKu7VKZRvxoWTy4kWAJL4rl1-NEOXqIBfq9A8DQ9mqFCT3vYNyt5rs5tBsww3IgywaQyHyF12CIdmmeNrt2Uj66irL0Xk2XYL_NloYmniPJ1VQEdJoB9fIvJMKScce=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт без лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
    {
      cost: 1060,
      description: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Исполнение по расположению секций может быть как правое так и левое.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000015`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3f5mJGXzaZ4xeRCA5xT8N0bPmSORVRvKY_yKK9xI5Qb6GtS8yHc2qJtEAJRoBdpylBZK0-woHpehB5qz9oz9Ns6f4KyIKXlXBlpub0YO-D6C1DcqZTtD4pXOA114_KakeU2RgfwogMz39Bods8vSnpQ=w577-h433-no?authuser=0',
      ],
      lot: 'Комфорт без лам',
      miniDescription: `Размеры (типовые)
      - габаритный размер 245х160см.
      - спальное место 200х145 см.`,
      tittle: `Угловой диван "Комфорт"`,
    },
  ],

  settle: [
    {
      cost: 210,
      description: `пр. ПЛ-001 односекционная гр.12 с декр. подушкой`,
      id: `000016`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cJ_eiQjYZe7CuiqyfTp5fWlmEemUOUmF9kCBjot4pF-Y2i1Lgd5QeFwWsuIohTuZ5vA1PBEreaLhBdlKQ-FNqNT7EACMKiuoX3verjTCjje42YRjFz88yV6T_MdiTQoUj0waKtqKkTPUYI89uLTSrj=s520-no?authuser=0',
      ],
      lot: 'Плюшка ск',
      miniDescription: `пр. ПЛ-001 односекционная гр.12 с декр. подушкой`,
      tittle: `Скамья "Плюшка"`,
    },
    {
      cost: 210,
      description: `пр. ПЛ-001 односекционная гр.12 с декр. подушкой`,
      id: `000030`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3c7gHABaqSjB5iXh2ae2t6c75XLF-CJg7yR71AZJJZDSCU9-suwi01lG6eRgEdG9t9q5Pcr6R3vOQM7Xn4poXhghawbXX2AooYnt3XF6K0pR3uzLtfK8K_bHiI0nSx7cMyLtusN6T6HiLWWr1OT5Ofk=s520-no?authuser=0',
      ],
      lot: 'Плюшка ск',
      miniDescription: `пр. ПЛ-001 односекционная гр.12 с декр. подушкой`,
      tittle: `Скамья "Плюшка"`,
    },

    {
      cost: 570,
      description: `Размеры - габаритный размер изделия в сборе 180х160см
      - длина секций скамьи: 120см, 100см.
      
      Угловая секция - 60х60см.
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок. Исполнение по расположению секций может быть как правое так и левое.
      
      Каркас скамьи угловой сделан из ламинированного ДСП или МДФ, и ДВП. Мягкие элементы изготовлены из поролона, синтепона и т.д. Хромированная фурнитура, опоры.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000017`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3chXRujYUnfliip2x10DF2YgafIpXFVVEjRhNVH29_0-NcctmnB2AnKEH5EgtG96aIY07TqJA1LY3IQZb2fOqY_pCnih9yOqkWDsNn8r9Ycr5dFVHmQms0OKxloYTc8ny30g6dfOilQAmrBhUz666qz=w254-h168-no?authuser=0',
      ],
      lot: 'Плюшка угл',
      miniDescription: `Размеры - габаритный размер изделия в сборе 180х160см
      - длина секций скамьи: 120см, 100см.`,
      tittle: `Скамья "Плюшка"`,
    },
    {
      cost: 570,
      description: `Размеры - габаритный размер изделия в сборе 180х160см
      - длина секций скамьи: 120см, 100см.
      
      Угловая секция - 60х60см.
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок. Исполнение по расположению секций может быть как правое так и левое.
      
      Каркас скамьи угловой сделан из ламинированного ДСП или МДФ, и ДВП. Мягкие элементы изготовлены из поролона, синтепона и т.д. Хромированная фурнитура, опоры.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000018`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3elpTFPRmlfSU9_YkWM-35bHkDjBwmnaUQzfbKGNz7iKAOqmmmdtuASycXzKfKXxdDg0EswACwUvbV_ZpGL01S2inbWX3ezAAGGotNvsySnBI8Qfc9PnYC15Xa_5gPu7QtqHFOa8PlZ22dsWdCaFowu=w700-h467-no?authuser=0',
      ],
      lot: 'Плюшка угл',
      miniDescription: `Размеры - габаритный размер изделия в сборе 180х160см
      - длина секций скамьи: 120см, 100см.`,
      tittle: `Скамья "Плюшка"`,
    },
  ],

  'sofa-bed': [
    {
      cost: 475,
      description: ``,
      id: `000019`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cgauAB8lVeXKgSMmo5CKt2U0tj9mk1Qj4GUv6NxkCMvKjGrKSuVo4KW0Ak9KdhaLOm_1RWYqYqgXWPhLqVAtCTez4FwhAhwsDi4k4l3Irh3C2Npc1clHAkHuIZFYvK2gBR5x22mVt7HexwUU7KAnA9=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3eTDmMETCVYnSU5u9pAZ6V3jl8BUqZW1W59TaDJnwF5e3n6bkcZNe4jyc8r2k-CaEAy5l8_bEaOBi1DBM7MnyA9s5p4QdUgG5WuWw0NMhJuQsZ53ERfSatDtQOA3PozyCi8CE5YJtXT_YfTv9hTj9r4=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3ckAphJ8Zh1ktLZwYcxB4eE8HhVGjgqs_ZIWmIrlmAOXo2CTLtUgW1bwylzS2koxfH5EjNX0HJJcFfkcRtHpnM3YNcXiUQXwLsVuHynj1ptW1KBw_dhzbCxU8qb3nPH_Zj_GqxG570VW1-PvExEmzEv=w577-h433-no?authuser=0',
      ],
      lot: 'Виола классика',
      miniDescription: ``,
      options: {
        correspond:
          '«Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции»',
        dimensions: {
          length: 210,
          width: 95,
        },
        dimensions2: {
          length: 210,
          width: 115,
        },
        mechanism:
          '«книжка», трансформация из положения «диван» в положение «кровать» осуществляется путем опускания спинки назад, и поднятием сидения вверх «до щелчка» и опусканием её вниз.',
        sleepingArea: {
          length: 190,
          width: 115,
        },
        softElements:
          'изготовлены из поролона, синтепона, войлока и т.д. Основой сидения и спального места является пружинный блок. Декоративные подушки наполнены синтетическим пухом «файбертек».',
        upholstery:
          'ткань мебельная, кожзаменитель. Каркас диван-кровати сделан из МДФ или ламинированного ДСП пиломатериалов хвойных пород дерева, фанеры, и ДВП.',
      },
      tittle: `Диван-кровать "Виола"`,
    },

    {
      cost: 550,
      description: `Размеры
      - габаритный размер в сборе 150х95см.
      - спальное место 110х190см.
      
      ВОЗМОЖНО ИЗГОТОВЛЕНИЕ ПО ВАШЕМУ РАЗМЕРУ!!!
      
      Обивочный материал: ткань мебельная.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева, и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока, мебельного настила и т.д. Декоративные подушки наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «телескоп», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед. Имеется отсек для хранения спальных принадлежностей.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000020`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3dinJRv-DX6LOi7UR-msMGeBJc5Is7HlRmjMH5DjX44tp86KPUKp7wDStSZbaOLoadQSXE17HcoYuyyTMQ8nTwNvimQbuEK5uPKs9lxcY451vXawAzvYozJRqBzyVwEaoN3xjM7057P-WAExIY22XJm=w557-h378-no?authuser=0',
      ],
      lot: 'Лада Д/К',
      miniDescription: `Размеры
      - габаритный размер в сборе 150х95см.
      - спальное место 110х190см.`,
      tittle: `Диван-Кровать «Лада»`,
    },

    {
      cost: 550,
      description: `Размеры
      - габаритный размер в сборе 150х95см.
      - спальное место 110х190см.
      
      ВОЗМОЖНО ИЗГОТОВЛЕНИЕ ПО ВАШЕМУ РАЗМЕРУ!!!
      
      Обивочный материал: ткань мебельная.
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева, и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока, мебельного настила и т.д. Декоративные подушки наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «телескоп», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед. Имеется отсек для хранения спальных принадлежностей.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г.
      
      Гарантийный срок - 18 месяцев`,
      id: `000021`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3fa-T2NR9N3oXhKl_Dnth_JDVpTo0b17PiWtxX32r3XNCEmuRektqaxKniIGlbxawdZMKpLyDeZ5YYwBpxVJUmJJWWHwc61tRhbUP-PL7bmyH7q_kuzk4td3hzjfklHBhyTjHm5JZ5INZ2fqUCcngMU=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3dBIjAoAm0U_XcGoRfUVGbTAbVLOP_QwZGwTCEZyvdmupeAPVmtIbqBF-iTuJLZy2eIe-FvpEU5DvldbUtrKgwNyyLliwRer9UC8lqUMQTS_aEv5xbyZMXCGdSiFH7teGPK79114nFyL_xWHTNpjH_n=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3eODnRHp__GVzOTMesJvqD59or5GrfmMJ1dEZPxYkG-PzaUHkvf3b5FQM046ufr9qCwJVrbWO_w5n9jGW6MnwB1A8fGrNjbfDd-GKWNDzFkDgkmRuP6ibAq4wR1t7k2xidWvahtRkk9vRmC9-3bz1Dz=w577-h433-no?authuser=0',
      ],
      lot: 'Лада Д/К',
      miniDescription: `Размеры
      - габаритный размер в сборе 150х95см.
      - спальное место 110х190см.`,
      tittle: `Диван-Кровать «Лада»`,
    },

    {
      cost: 810,
      description: `Размеры
      - габаритные размеры 216х97см;
      в разложенном воде 216х147см
      - спальное место (без учета боковин)190х147см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева, и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока, мебельного настила и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г. Гарантийный срок - 18 месяцев`,
      id: `000022`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3dnZFq-9CoA7kXmPu7TSHzlPsqEK0rii6TMWiugXthLrJ7c_ALUC0qCXSM21W0dHdWK9t-swxBPZYXgBHRa0QHdghSVS5Y86rjOLB71VojzYrAOjcJElqViMnWc5613LkdbNGTPppX2Efac5izz12Ei=w1213-h927-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3eF5XKn6Nk4XNHJ6w-4iTnj_tmX7UOHGZ4Gb7jcDQXV7nqxrYay0ETD0lx_IwK8yyLzlnHEAEhbN5b7WH3MCz330FogRVXuTuTr1oS-HQUO1DA4C0laD5951p_NfmJOhuQvV694WpvHOF3YjIuQACaG=w1236-h927-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3fg5YQ5daRNBBuREmUsw8hy6_hFGdTUxpAV74QbnJlpk3Ncl1a_6e0YFsPiqWTfwAe59GsHTUCu838FeqMEG32RvNKspVCG6-VtgRJ9UI-SJ_-6GX7P0C8GkySlXbV_LVh2xlIAlXF9rN8uwgi_3e-E=w1278-h861-no?authuser=0',
      ],
      lot: 'Август бок, лам',
      miniDescription: `Размеры
      - габаритные размеры 216х97см;
      в разложенном воде 216х147см
      - спальное место (без учета боковин)190х147см.`,
      tittle: `Диван-Кровать «Август» пр. АВ-001-01`,
    },

    {
      cost: 630,
      description: `Размеры
      - габаритные размеры 216х97см;
      в разложенном воде 216х147см
      - спальное место (без учета боковин)190х147см.
      
      Изготовить мебель можно в любом обивочном материале: мебельном кожзаменителе или ткани любых расцветок.
      
      Каркас диван-кровати сделан из ламинированного ДСП или МДФ, пиломатериалов хвойных пород дерева, и ДВП.
      
      Мягкие элементы изготовлены из поролона, синтепона, войлока, мебельного настила и т.д. Основой сидения и спального места является пружинный блок. Подушки для отдыха наполнены синтетическим пухом «файбертек».
      
      Механизм раскладки «еврокнижка», трансформация из положения «диван» в положение «кровать» осуществляется путем выдвижения сидения вперед и опусканием спинки.
      
      Изделие соответствует «Техническому регламенту Таможенного союза ТР ТС 025/2012 «О безопасности мебельной продукции». Декларация соответствия ТР/ТС ЕАЭС NRU Д-BY.МН33.В.00539 от 20.03.2018г. Гарантийный срок - 18 месяцев`,
      id: `000023`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3clTmFOnG1pJp0S0wHfbNQrNqMd4Uu5UOZVbFqi4yF9Zyaa9yaoK7ebaiOWw08LvWzkz7YwT7DOxetGR54DKqTS-yYyaHoZfaVYhb8az8llOweRLp1zI4mbaKEJJ_rhqThU_IhTNQn1SJIOoQ87nv8Q=w577-h433-no?authuser=0',
      ],
      lot: 'Август без бок',
      miniDescription: `Размеры
      - габаритные размеры 216х97см;
      в разложенном воде 216х147см
      - спальное место (без учета боковин)190х147см.`,
      tittle: `Диван-Кровать «Август» пр. АВ-001-01`,
    },

    {
      cost: 640,
      description: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х130`,
      id: `000029`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3ehPvtU5CI5e438b4iocRZl4-yKWFq_fvn1B9HE1Fn_AYGYZeUErSyEN63JaqRLGafDTq6mf9VZua2Kdez4LOwdI9frRcMrwuKKtT0O9W2xMspjBAkX-9ETwXIg9x5hyQjYC2paiUsaPyWnNAjZeh70=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3dBWM-ZPVCWApLDaCjmze-gkehled89BwJOp3bb8wWcLSewVDdMXibaUQLZPGR80K5tjXF3e0jVDIiEywWJkUsDTF79tHR07PPALyIvxwHM-csxIXfYeIsctI--bRXXpw5_ICnYCCxK7DEOiMkOI0LM=w667-h374-no?authuser=0',
      ],
      lot: 'Улыбка',
      miniDescription: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х 130`,
      tittle: `Диван-кровать "Улыбка"`,
    },

    {
      cost: 640,
      description: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х130`,
      id: `000024`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3c4mL2IGoJq-BAfD-IvcSIv2fCsG4zyNUWq8burfYohsbkPQmw6hNu80D6AvNuVZ4uCB-e9KKBsjDtuIi6HlHgFfTVKe4jTrlL2NWV-CGi9CvXOmqgk9VHSvejNG2M4iOdp8tZIPiZYHWhJfXbvNk6w=w577-h432-no?authuser=0',
      ],
      lot: 'Улыбка',
      miniDescription: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х 130`,
      tittle: `Диван-кровать "Улыбка"`,
    },

    {
      cost: 640,
      description: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х130`,
      id: `000025`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cM_uHAGMXrKQelH0pk40k86SRgfuWmor5xY1FEmBnDhMu6X4oZ1IWgBHmuj3tFEtiuDne43C7XxJYsxdDyKQk6N8qcNO7h312o3mMvSLLpHBO-AL-0uboHZsUEfTyrARXFQxsuWBrJVq0i5uAFvrj2=w577-h433-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3eNwsliiv77vdp6dxaQu89pKIevhjvAyVq1WGDIldKPlm-BrATGeEZ6GKBrUH3hfZwewLbJGt5GoARsv3d-Qn4N6npgItxtVy1tkq9zg2yDeL6nOERVwyrC96qxAgH40CnMKTg9HwsS1_S7fcpLhs9b=w577-h433-no?authuser=0',
      ],
      lot: 'Улыбка',
      miniDescription: `Диван-кровать "Улыбка" Габаритные размеры: 195х100 / спальное место 192х 130`,
      tittle: `Диван-кровать "Улыбка"`,
    },

    {
      cost: 520,
      description: ``,
      id: `000026`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3fCgPOfwYZ0FoOQMFGkK48BacsJGfER0hWlRrGjE08GNXx_YS0tvEbqHwV1CfMKJ23kWMFHQX5Q1FrbU8N_Q9ApXamN-GBmIkiH-8lMAIgzm8xKjxFG-J5doIe_hKsubChZhLZOC9TJnpTJEdRef7rr=w1278-h719-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3eqy7OwJHeA3aCHZ4ild6jnis0YkLdcCS-bMzpM7CBtyY2kIhlAhJ9G0ADlc-QAcaEJyaUyz9LMJ6ZTLJzEaC6vMRiU1H9GEGIstX9LqYasKFFjCVE-U80pHkpj6w_3joptmayeN0is0VUNS6E4CoJX=w1278-h719-no?authuser=0',
      ],
      lot: 'Дачный',
      miniDescription: ``,
      tittle: `Диван-кровать "Дачный"`,
    },

    {
      cost: 520,
      description: ``,
      id: `000027`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3eOKT94zPCqjPO0zFmPKggj1swwxL5zf9hRHTu6w5NMahbEMUpIyTjNjLU1yPjwqglCDXcNJJcmRqEHbWjoPmQVTNwWIqzRFt0aEI3yA3ajWaoFb5VYyQRkgtxJMGvxOiHp1t6ER0Ye_TIanlXdg5pZ=w1236-h927-no?authuser=0',
        'https://lh3.googleusercontent.com/pw/ACtC-3fYydP-Taa62tRgsBDJJNExm4aGNac0Q2VzEjaSVccZIw63ZDkGSqvbSLyUWpgfc940Df_KK2tuK_N46uqAcszCn4J0moOYHmf9zAe331LIvVYA6L1Oo874z6tHnQehYTZPcF99bCPqUdVAsKlnqbsi=w1236-h927-no?authuser=0',
      ],
      lot: 'Дачный',
      miniDescription: ``,
      tittle: `Диван-кровать "Дачный"`,
    },

    {
      cost: 590,
      description: `пр. OB-001-01 гр.12`,
      id: `000028`,
      images: [
        'https://lh3.googleusercontent.com/pw/ACtC-3cW_DTUGx9MCSPhMUILfn_rQIcoZB9gyoIRfPKPGa4xoAXb4EaKHHbMUsk4Dkk3V-rv7z_zVd2IkyrZJhKj4i8XLvd3oiSZ1yvY_qohQlYUWAQvTTGEBflhK-sKUmvneb7nfU3fzkqu2rRFiSFjRpjz=w320-h240-no?authuser=0',
      ],
      lot: 'Пружиня Д/К',
      miniDescription: `пр. OB-001-01 гр.12`,
      tittle: `Диван-кровать Прыгажуня`,
    },
  ],
};

// TODO - temp mocks data
export const furnitureCollectionsById = Object.entries(
  furnitureCollections,
).reduce((collectionsById: CollectionsById, [collectionName, items]) => {
  items.forEach((item: Furniture) => {
    collectionsById[item.id] = { collectionName, ...item };
  });
  return collectionsById;
}, {});
