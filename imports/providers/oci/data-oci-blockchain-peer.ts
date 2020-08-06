// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_peer.html
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
      "alias": {
        "type": "string",
        "computed": true
      },
      "blockchain_platform_id": {
        "type": "string",
        "required": true
      },
      "host": {
        "type": "string",
        "computed": true
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
      "peer_id": {
        "type": "string",
        "required": true
      },
      "peer_key": {
        "type": "string",
        "computed": true
      },
      "role": {
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

export interface DataOciBlockchainPeerConfig extends TerraformMetaArguments {
  readonly blockchainPlatformId: string;
  readonly peerId: string;
}
export class DataOciBlockchainPeerOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}

// Resource

export class DataOciBlockchainPeer extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_peer',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._peerId = config.peerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId: string;
  public get blockchainPlatformId() {
    return this._blockchainPlatformId;
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public ocpuAllocationParam(index: string) {
    return new DataOciBlockchainPeerOcpuAllocationParam(this, 'ocpu_allocation_param', index);
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId: string;
  public get peerId() {
    return this._peerId;
  }
  public set peerId(value: string) {
    this._peerId = value;
  }

  // peer_key - computed: true, optional: false, required: true
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
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
      peer_id: this._peerId,
    };
  }
}
