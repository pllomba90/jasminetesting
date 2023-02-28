describe("other functionalties testing", function(){

    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
      });

      it('should sum up all tip amounts', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(80);
      });

      it('should sum up all bill amounts', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(400);
      });
      it('should sum up all tip percentages', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
      });

      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
    });