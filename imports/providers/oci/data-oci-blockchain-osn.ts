// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_osn.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ad": {
        "type": "string",
        "computed": true
      },
      "blockchain_platform_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "ocpu_allocation_param": {
        "type": [
          "list",
          [
            "object",
            {
              "ocpu_allocation_number": "number"
            }
          ]
        ],
        "computed": true
      },
      "osn_id": {
        "type": "string",
        "required": true
      },
      "osn_key": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciBlockchainOsnConfig extends TerraformMetaArguments {
  readonly blockchainPlatformId: string;
  readonly osnId: string;
}
export class DataOciBlockchainOsnOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}

// Resource

export class DataOciBlockchainOsn extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainOsnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_osn',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._osnId = config.osnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId: string;
  public get blockchainPlatformId() {
    return this._blockchainPlatformId;
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public ocpuAllocationParam(index: string) {
    return new DataOciBlockchainOsnOcpuAllocationParam(this, 'ocpu_allocation_param', index);
  }

  // osn_id - computed: false, optional: false, required: true
  private _osnId: string;
  public get osnId() {
    return this._osnId;
  }
  public set osnId(value: string) {
    this._osnId = value;
  }

  // osn_key - computed: true, optional: false, required: true
  public get osnKey() {
    return this.getStringAttribute('osn_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blockchain_platform_id: this._blockchainPlatformId,
      osn_id: this._osnId,
    };
  }
}
