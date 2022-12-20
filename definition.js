Blockly.Blocks['khoi_dong'] = {
  init: function() {
    this.jsonInit(
{
  type: "khoi_dong",
  message0: "khởi động máy nghe nhạc chân TX %1 chân RX %2",
  args0: [
    {
      type: "field_dropdown",
      name: "TX",
      options: [
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
        ]
      ]
    },
    {
      type: "field_dropdown",
      name: "RX",
      options: [
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
        ]
      ]
    }
  ],
  colour: 160,
  tooltip: "",
  helpUrl: ""
}


    );
  }
};



Blockly.Blocks['phat_nhac'] = {
  init: function() {
    this.jsonInit(

{
  type: "phat_nhac",
  message0: "%1",
  args0: [
    {
      type: "field_dropdown",
      name: "DanhSach",
      options: [
        [
          "Phat nhac",
          "play"
        ],
        [
          "Tam dung",
          "pause"
        ],
        [
          "Dung phat nhac",
          "stop"
        ]
      ]
    }
  ],
previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: "",
  helpUrl: ""
}
    );
  }
};






Blockly.Blocks['nhac_phat'] = {
  init: function() {
    this.jsonInit(

	{
  "type": "nhac_phat",
  "message0": "phat bai nhac so %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}

    );
  }
};


Blockly.Python['khoi_dong'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var dropdown_rx = block.getFieldValue('RX');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['phat_nhac'] = function(block) {
  var dropdown_danhsach = block.getFieldValue('DanhSach');
  // TODO: Assemble Python into code variable.
  var code = 'sound.write(' + dropdown_action + '())\n';
  return code;
};


Blockly.Python['nhac_phat'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
