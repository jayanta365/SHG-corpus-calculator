function calculateCorpus() {
    // Get user inputs
    const revolvingFund = parseFloat(document.getElementById("revolvingFund").value);
    const totalSavings = parseFloat(document.getElementById("totalSavings").value);
    const internalLendingInterest = parseFloat(document.getElementById("internalLendingInterest").value);
    const otherIncome = parseFloat(document.getElementById("otherIncome").value);
    const fundFromOtherSources = parseFloat(document.getElementById("fundFromOtherSources").value);

    // Calculate total corpus
    const totalCorpus = revolvingFund + totalSavings + internalLendingInterest + otherIncome + fundFromOtherSources;

    // Display total corpus result
    document.getElementById("totalCorpusResult").textContent = totalCorpus.toLocaleString("en-IN");

    // Calculate eligible loan amount
    const eligibleLoanAmount = totalCorpus * 6;

    // Display eligible loan amount result
    document.getElementById("eligibleLoanAmount").textContent = eligibleLoanAmount.toLocaleString("en-IN");
}