Ext.application({
   launch:function(){
   name:'exa-mensito',
       Ext.create('Ext.TabPanel',{
          fullscreen:true,
          tabBarPosition:'bottom',
          items:[
              {
                  title:'Fahrenheit',
                  iconCls:'home',
                  html:'Calcular de centigrados a fahrenheit'
              },
               formulario1
               
              
          ]
       });
   }
});
/*El calculo de fahrenheit a centigrados*/
var formulario1={
    xtype:'fieldset',
    title:'Centigrados',
    iconCls:'user',
    items:[
       {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textogrados').getValue();
              var res=(g-32)/1.8;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        {
          xtype:'textfield',
          placeHolder:'Escribe aqui los grados'
        },
        {
            html:['<center><h1>Calculo de Fahrenheit a Centigrados</h1>',
            '<p>Introduce el valor de fahrenheit en los campos siguientes</p>',
        '</center>'].join('')
        },
        
       
    ]
}

