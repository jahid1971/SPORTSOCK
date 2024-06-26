import { IBranch } from "./branch.interface";
import { Branch } from "./branch.model";

const createBranch = async (payload: IBranch) => {
    payload.isDeleted = false;
    payload.status = "active";
    const result = await Branch.create(payload);
    return result;
};

const getAllBranches = async () => {
    const result = await Branch.find({});
    return result;
};

export const BranchServices = {
    createBranch,
    getAllBranches,
};
