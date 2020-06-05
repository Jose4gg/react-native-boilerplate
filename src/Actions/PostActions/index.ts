import { Dispatch } from "redux";
import { PostService } from "@Services";
import { ActionConsts } from "@Definitions";

export const PostActions = {
    List: () => async (dispatch: Dispatch) => {
        dispatch({ type: ActionConsts.Post.List.Request });

        const { ok, data } = await PostService.List();

        if (!ok || !data) {
            dispatch({
                type: ActionConsts.Post.List.Failed,
                payload: data || "Bir hata oluştu",
            });

            return;
        }

        dispatch({ type: ActionConsts.Post.List.Success, payload: data });
    },
};
