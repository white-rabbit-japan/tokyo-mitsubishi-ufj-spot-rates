# tokyo-mitsubishi-ufj-spot-rates
Meteor package - returns forex spot rates from Bank of Tokyo Mitsubishi UFJ.

## data source
http://www.bk.mufg.jp/gdocs/kinri/list_j/kinri/kawase.html

USD only for now.

```
{
    "base" : "JPY",
    "updatedAt" : ISODate("2015-04-22T01:39:00.000Z"),
    "currencies" : [ 
        {
            "currency" : "USD",
            "rates" : {
                "ttBuy" : 11866,
                "cashBuy" : 11666,
                "cashSell" : 12246,
                "atSight" : 11849,
                "ttSell" : 12066
            }
        }
    ],
    "createdAt" : ISODate("2015-04-22T09:25:23.846Z")
}
```
