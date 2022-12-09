{
  "type": "s1",
  "message0": "khoi dong may nghe nhac TX %1 RX %2",
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
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}


{
  "type": "s2",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "cboAction",
      "options": [
        [
          "Phat nhac",
          "play"
        ],
        [
          "Tam dung",
          "pause"
        ],
        [
          "Dung",
          "stop"
        ]
      ]
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}


{
  "type": "s3",
  "message0": "Phat nhac so %1",
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


{
  "type": "s4",
  "message0": "Mo am luong %1 (0-30)",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}



Blockly.Python['s1'] = function(block) {
  var dropdown_tx = block.getFieldValue('TX');
  var dropdown_tx = block.getFieldValue('RX');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['s2'] = function(block) {
  var dropdown_cboaction = block.getFieldValue('cboAction');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['s3'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['s4'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};