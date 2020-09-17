import { OK, BAD_REQUEST } from 'http-status-codes';
import { ClassMiddleware, Controller, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { authZOPAPermission } from '../middlewares/authMiddleware';

export interface IUser extends Express.User {
    googleId?: string;
}

export interface CustomRequest extends Request {
    isAllowed: boolean;
}

@Controller('api')
@ClassMiddleware(authZOPAPermission)
export class ImageController {
    public static readonly SUCCESS_MSG = 'GreetingZ ';

    @Get('images')
    private getImages(req: CustomRequest, res: Response) {
        try {
            if (req.user && req.isAllowed) {
                const user: IUser = req.user;
                const images = [
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_and_happy_halloween_paperclips-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_paperclip_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter_closeup-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_6-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_5-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/cat_on_a_skateboard-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/07/tricolor_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/white_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/black_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cat_behind_the_curtain-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/black_cat_at_the_pond-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/lazy_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/11/birman_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/pregnant_womans_belly_and_a_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/cat_and_cactus-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/02/cat_sitting_on_a_windowsill-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/03/cat_and_cactus_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/05/mother_cat_caressing_kittens-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/07/sleeping_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_the_vet-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_4-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/02/sunbathing-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_and_happy_halloween_paperclips-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_paperclip_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter_closeup-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_6-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_5-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/cat_on_a_skateboard-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/07/tricolor_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/white_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/black_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cat_behind_the_curtain-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/black_cat_at_the_pond-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/lazy_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/11/birman_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/pregnant_womans_belly_and_a_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/cat_and_cactus-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/02/cat_sitting_on_a_windowsill-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/03/cat_and_cactus_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/05/mother_cat_caressing_kittens-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/07/sleeping_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_the_vet-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_4-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/02/sunbathing-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_and_happy_halloween_paperclips-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_paperclip_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter_closeup-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_6-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_5-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/cat_on_a_skateboard-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/07/tricolor_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/white_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/black_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cat_behind_the_curtain-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/black_cat_at_the_pond-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/lazy_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/11/birman_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/pregnant_womans_belly_and_a_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/cat_and_cactus-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/02/cat_sitting_on_a_windowsill-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/03/cat_and_cactus_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/05/mother_cat_caressing_kittens-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/07/sleeping_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_the_vet-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_4-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/02/sunbathing-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_and_happy_halloween_paperclips-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_paperclip_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter_closeup-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_6-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_5-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/cat_on_a_skateboard-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/07/tricolor_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/white_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/black_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cat_behind_the_curtain-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/black_cat_at_the_pond-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/lazy_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/11/birman_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/pregnant_womans_belly_and_a_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/cat_and_cactus-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/02/cat_sitting_on_a_windowsill-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/03/cat_and_cactus_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/05/mother_cat_caressing_kittens-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/07/sleeping_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_the_vet-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_4-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/02/sunbathing-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/feeding_a_cat_with_a_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cats_treat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2015/10/black_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_pumpkin_and_a_ghost_paperclips_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/04/cat_sitting_on_a_desk_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_and_happy_halloween_paperclips-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/10/black_cat_paperclip_in_a_calendar-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_in_a_transporter_closeup-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_6-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_a_vet_hospital_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_5-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/sleeping_cat_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2018/01/lying_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/10/cat_on_a_skateboard-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/07/tricolor_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/white_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/09/black_cat_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/cat_behind_the_curtain-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/black_cat_at_the_pond-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/10/lazy_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/11/birman_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/pregnant_womans_belly_and_a_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/01/cat_and_cactus-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/02/cat_sitting_on_a_windowsill-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/03/cat_and_cactus_2-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/05/mother_cat_caressing_kittens-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2017/07/sleeping_cat-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_3-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_at_the_vet-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2020/04/cat_having_an_iv_fluid_therapy_4-1000x667.jpg',
                    'https://freestocks.org/fs/wp-content/uploads/2016/02/sunbathing-1000x667.jpg',
                ];
                res.send({
                    images,
                });
            }
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default ImageController;
