
import { Injectable } from '@nestjs/common';
import { CreateWalletDto, GenerateAddressDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletService {

  createWallet(createWalletDto: CreateWalletDto): void {
    // TODO :  Call sandbox circle
  }

  getWalletDetails(id: string): void {
    // TODO :  Call sandbox circle
  }

  generateAddress(generateAddtessDto: GenerateAddressDto) {

  }

  assignWalletToUser() {
    // TODO: Create after creating user Module
  }
}
