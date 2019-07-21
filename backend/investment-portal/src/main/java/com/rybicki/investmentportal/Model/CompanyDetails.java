package com.rybicki.investmentportal.Model;

import com.rybicki.investmentportal.Services.MyCompaniesService;
import com.sun.corba.se.spi.orbutil.threadpool.ThreadPool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

public class CompanyDetails extends Company {

    private Map<String, Object> companyDetailsDataNumbers = new HashMap();
    private static final Logger LOGGER = LoggerFactory.getLogger(MyCompaniesService.class);

    public CompanyDetails(String symbol) {
        super(symbol, true);
        try {
            Stock stock = YahooFinance.get(symbol);
            companyDetailsDataNumbers.put("Symbol", super.getSymbol());
            companyDetailsDataNumbers.put("Name", super.getName());
            companyDetailsDataNumbers.put("Price", super.getPrice());
            if (super.getAnnualYieldDividend() != null)
                companyDetailsDataNumbers.put("Annual Yield Dividend", super.getAnnualYieldDividend());
            else
                companyDetailsDataNumbers.put("Annual Yield Dividend", "-");
            companyDetailsDataNumbers.put("Change", super.getChange());
            companyDetailsDataNumbers.put("Change In %", super.getChangeInPercent());

            if (stock.getStats().getBookValuePerShare() != null)
                companyDetailsDataNumbers.put("Book Value Per Share", stock.getStats().getBookValuePerShare().toString());

            if (stock.getStats().getEBITDA() != null)
                companyDetailsDataNumbers.put("EBITDA", stock.getStats().getEBITDA().toString());

            if (stock.getStats().getEps() != null)
                companyDetailsDataNumbers.put("EPS", stock.getStats().getEps().toString());

            if (stock.getStats().getEpsEstimateCurrentYear() != null)
                companyDetailsDataNumbers.put("EPS Estimate Current Year", stock.getStats().getEpsEstimateCurrentYear().toString());

            if (stock.getStats().getEpsEstimateNextQuarter() != null)
                companyDetailsDataNumbers.put("EPS Estimate Next Quarter", stock.getStats().getEpsEstimateNextQuarter().toString());

            if (stock.getStats().getEpsEstimateNextYear() != null)
                companyDetailsDataNumbers.put("EPS Estimate Next Year", stock.getStats().getEpsEstimateNextYear().toString());

            if (stock.getStats().getMarketCap() != null)
                companyDetailsDataNumbers.put("Market Cap", stock.getStats().getMarketCap().toString());

            if (stock.getStats().getOneYearTargetPrice() != null)
                companyDetailsDataNumbers.put("One Year Target Price", stock.getStats().getOneYearTargetPrice().toString());

            if (stock.getStats().getPe() != null)
                companyDetailsDataNumbers.put("PE", stock.getStats().getPe().toString());

            if (stock.getStats().getPeg() != null)
                companyDetailsDataNumbers.put("PEG", stock.getStats().getPeg().toString());

            if (stock.getStats().getPriceBook() != null)
                companyDetailsDataNumbers.put("Price Book", stock.getStats().getPriceBook().toString());

            if (stock.getStats().getPriceSales() != null)
                companyDetailsDataNumbers.put("Price Sales", stock.getStats().getPriceSales().toString());

            if (stock.getStats().getRevenue() != null)
                companyDetailsDataNumbers.put("Revenue", stock.getStats().getRevenue().toString());

            if (stock.getStats().getROE() != null)
                companyDetailsDataNumbers.put("ROE", stock.getStats().getROE().toString());

            if (stock.getStats().getShortRatio() != null)
                companyDetailsDataNumbers.put("Short Ratio", stock.getStats().getShortRatio().toString());

//            if (stock.getStats().getEarningsAnnouncement() != null)
//                companyDetailsDataNumbers.put("Earnings Announcement", stock.getStats().getEarningsAnnouncement().toString());

            if (stock.getStats().getSharesFloat() != null)
                companyDetailsDataNumbers.put("Shares Float", stock.getStats().getSharesFloat().toString());

            if (stock.getStats().getSharesOutstanding() != null)
                companyDetailsDataNumbers.put("Shares Outstanding", stock.getStats().getSharesOutstanding().toString());

            if (stock.getStats().getSharesOwned() != null)
                companyDetailsDataNumbers.put("Shares Owned", stock.getStats().getSharesOwned().toString());
//            LOGGER.error("PRZERWA ");


            if (stock.getStockExchange() != null)
                companyDetailsDataNumbers.put("Stock Exchange", stock.getStockExchange());

            if (stock.getQuote().getLastTradeDateStr() != null)
                companyDetailsDataNumbers.put("Last Trade Date Str", stock.getQuote().getLastTradeDateStr());

            if (stock.getQuote().getAsk() != null)
                companyDetailsDataNumbers.put("Ask", stock.getQuote().getAsk().toString());

            if (stock.getQuote().getAskSize() != null)
                companyDetailsDataNumbers.put("Ask Size", stock.getQuote().getAskSize());

            if (stock.getQuote().getAvgVolume() != null)
                companyDetailsDataNumbers.put("Avg Volume", stock.getQuote().getAvgVolume());

            if (stock.getQuote().getBid() != null)
                companyDetailsDataNumbers.put("Bid", stock.getQuote().getBid().toString());

            if (stock.getQuote().getBidSize() != null)
                companyDetailsDataNumbers.put("Bid Size", stock.getQuote().getBidSize());

            if (stock.getQuote().getChangeFromAvg50() != null)
                companyDetailsDataNumbers.put("Change From Avg 50", stock.getQuote().getChangeFromAvg50().toString());

            if (stock.getQuote().getChangeFromAvg50InPercent() != null)
                companyDetailsDataNumbers.put("Change From Avg 50 In Percent", stock.getQuote().getChangeFromAvg50InPercent().toString());

            if (stock.getQuote().getChangeFromYearLow() != null)
                companyDetailsDataNumbers.put("Change From Year Low", stock.getQuote().getChangeFromYearLow());

            if (stock.getQuote().getChangeFromYearLowInPercent() != null)
                companyDetailsDataNumbers.put("Change From Year Low In Percent", stock.getQuote().getChangeFromYearLowInPercent());

            if (stock.getQuote().getLastTradeSize() != null)
                companyDetailsDataNumbers.put("Last Trade Size", stock.getQuote().getLastTradeSize().toString());

            if (stock.getQuote().getPreviousClose() != null)
                companyDetailsDataNumbers.put("Previous Close", stock.getQuote().getPreviousClose().toString());

            if (stock.getQuote().getVolume() != null)
                companyDetailsDataNumbers.put("Volume", stock.getQuote().getVolume().toString());

            if (stock.getQuote().getYearLow() != null)
                companyDetailsDataNumbers.put("Year Low", stock.getQuote().getYearLow().toString());

        } catch (IOException e) {
            LOGGER.error(e.toString());
        }
    }

    public Map<String, Object> getCompanyDetailsDataNumbers() {
        return companyDetailsDataNumbers;
    }
}

