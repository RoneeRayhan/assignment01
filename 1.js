// 1.
function calculateDiscount(totalAmount) {
    let discountPercentage = 0;
    
    if (totalAmount >= 200) {
      discountPercentage = 15;
    } else if (totalAmount >= 100) {
      discountPercentage = 10;
    } else if (totalAmount >= 50) {
      discountPercentage = 5;
    }
    
    const discountAmount = (totalAmount * discountPercentage) / 100;
    const discountedTotal = totalAmount - discountAmount;
    
    console.log(`Discounted Amount: $${discountedTotal.toFixed(2)} (Total Amount: $${totalAmount.toFixed(2)} - Discount: $${discountAmount.toFixed(2)})`);
  }
  
  // Test cases
  calculateDiscount(30);   // No discount, Output: Discounted Amount: $30.00 (Total Amount: $30.00 - Discount: $0.00)
  calculateDiscount(80);   // 5% discount, Output: Discounted Amount: $76.00 (Total Amount: $80.00 - Discount: $4.00)
  calculateDiscount(150);  // 10% discount, Output: Discounted Amount: $135.00 (Total Amount: $150.00 - Discount: $15.00)
  calculateDiscount(250);  // 15% discount, Output: Discounted Amount: $212.50 (Total Amount: $250.00 - Discount: $37.50)
  
//   2.
