/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_source}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.realchristmastrees.org", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Real-Tree-Data-Point'
   (function(symbolName) {   
   
   })("Real-Tree-Data-Point");
   //Edge symbol end:'Real-Tree-Data-Point'

   //=========================================================
   
   //Edge symbol: 'Real-Tree-Data-Point_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      })("Fake-Tree-Data-Point");
   //Edge symbol end:'Fake-Tree-Data-Point'

   //=========================================================
   
   //Edge symbol: '_24wedge'
   (function(symbolName) {   
   
   })("_24wedge");
   //Edge symbol end:'_24wedge'

   //=========================================================
   
   //Edge symbol: '_11Wedge-1'
   (function(symbolName) {   
   
   })("_11Wedge-1");
   //Edge symbol end:'_11Wedge-1'

   //=========================================================
   
   //Edge symbol: '_11wedge-blue'
   (function(symbolName) {   
   
   })("_11wedge-blue");
   //Edge symbol end:'_11wedge-blue'

   //=========================================================
   
   //Edge symbol: 'greenWedge'
   (function(symbolName) {   
   
   })("greenWedge");
   //Edge symbol end:'greenWedge'

})(jQuery, AdobeEdge, "Christmas-Trees");