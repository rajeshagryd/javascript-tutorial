class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        let queryString = JSON.stringify(this.query)
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g)
        const queryObj = this.query.find(queryString)

        return this;
    }

    sort() {
        if (this.queryStr.sort) {
            const sortBy = this.queryStr.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-Released');
        }
        return this;
    }
    limitFields() {
        if (this.queryStr.fields) {
            const fields = this.queryStr.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v -reviews');
        }
        return this;
    }
    paginate(pageNo=1, pageSize=10) {
        const page = this.queryStr.page || 1;
        const limit = this.queryStr.limit || 10;
        const skip = (page * 1) - limit;
        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}