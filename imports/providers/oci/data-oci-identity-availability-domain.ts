// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_availability_domain.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ad_number": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
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

// Configuration

export interface DataOciIdentityAvailabilityDomainConfig extends TerraformMetaArguments {
  readonly adNumber?: number;
  readonly compartmentId: string;
}

// Resource

export class DataOciIdentityAvailabilityDomain extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityAvailabilityDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_availability_domain',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adNumber = config.adNumber;
    this._compartmentId = config.compartmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_number - computed: true, optional: true, required: false
  private _adNumber?: number;
  public get adNumber() {
    return this._adNumber ?? this.getNumberAttribute('ad_number');
  }
  public set adNumber(value: number | undefined) {
    this._adNumber = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_number: this._adNumber,
      compartment_id: this._compartmentId,
    };
  }
}
