Blockly.Blocks['phat_nhac'] = {
  init: function() {
    this.jsonInit(

	{
  		"type": "phat_nhac",
  		"message0": "%1",
  		"args0": [
    		{
      			"type": "field_dropdown",
     			 "name": "DanhSach",
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
          			"Dung phat nhac",
         			"stop"
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

    );
  }
};
