Blockly.Blocks['khoidong'] = {
  init: function() {
    this.jsonInit(

{
  "type": "khoidong",
  "message0": "Khởi tạo máy nghe nhạc chân TX %1 chân RX %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TX",
      "options": [
        [
          "P3",
          "pin3"
        ],
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P6",
          "pin6"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "P12",
          "pin12"
        ],
        [
          "P13",
          "pin13"
        ],
        [
          "P14",
          "pin14"
        ],
        [
          "P15",
          "pin15"
        ],
        [
          "P16",
          "pin16"
        ],
        [
          "P19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "RX",
      "options": [
        [
          "P6",
          "pin6"
        ],
        [
          "P0",
          "pin0"
        ],
        [
          "P1",
          "pin1"
        ],
        [
          "P2",
          "pin2"
        ],
        [
          "P3",
          "pin3"
        ],
        [
          "P4",
          "pin4"
        ],
        [
          "P5",
          "pin5"
        ],
        [
          "P7",
          "pin7"
        ],
        [
          "P8",
          "pin8"
        ],
        [
          "P9",
          "pin9"
        ],
        [
          "P10",
          "pin10"
        ],
        [
          "P11",
          "pin11"
        ],
        [
          "P12",
          "pin12"
        ],
        [
          "P13",
          "pin13"
        ],
        [
          "P14",
          "pin14"
        ],
        [
          "P15",
          "pin15"
        ],
        [
          "P16",
          "pin16"
        ],
        [
          "P19",
          "pin19"
        ],
        [
          "P20",
          "pin20"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
    );
  }
};

Blockly.Blocks['event'] = {
  init: function() {
    this.jsonInit(
{
  "type": "event",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "action",
      "options": [
        [
          "Phát nhạc",
          "play"
        ],
        [
          "Tạm dừng",
          "pause"
        ],
        [
          "Dừng phát nhạc",
          "stop"
        ],
        [
          "Phát bài nhạc kế tiếp",
          "next"
        ],
        [
          "Phát bài nhạc trước đó",
          "back"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}

    );
  }
};

Blockly.Blocks['phatbainhac'] = {
  init: function() {
    this.jsonInit(

{
  "type": "phatbainhac",
  "message0": "Bài nhạc số %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "1",
  "helpUrl": ""
}
    );
  }
};


Blockly.Blocks['moamluong'] = {
  init: function() {
    this.jsonInit(
{
  "type": "moamluong",
  "message0": "Mở âm lượng %1 (0-30)",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}

    );
  }
};


Blockly.Python['khoidong'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['event'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};



Blockly.Python['phatbainhac'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};



Blockly.Python['moamluong'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};