type CompanyId = string & {readonly brand: unique symbol}
type OrderId = string & {readonly brand: unique symbol}
type UserId = string & {readonly brand: unique symbol}

type ID = CompanyId | OrderId | UserId
