import { Document, Schema, Model, model} from "mongoose";

export interface UpstreamModel extends Document {
	ip: string,
	queries: number,
	bytes: number,
	numErrors: number
}

export const UpstreamSchema: Schema = new Schema({
	ip: { type: String, unique: true, index: true },
	queries: Number,
	bytes: Number,
	numErrors: Number
}, { collection: 'upstream' });

export const Upstream: Model<UpstreamModel> = model<UpstreamModel>("Upstream", UpstreamSchema);