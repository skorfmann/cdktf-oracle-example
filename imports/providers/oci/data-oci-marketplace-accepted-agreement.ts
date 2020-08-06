// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_accepted_agreement.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accepted_agreement_id": {
        "type": "string",
        "required": true
      },
      "agreement_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "listing_id": {
        "type": "string",
        "computed": true
      },
      "package_version": {
        "type": "string",
        "computed": true
      },
      "signature": {
        "type": "string",
        "computed": true
      },
      "time_accepted": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciMarketplaceAcceptedAgreementConfig extends TerraformMetaArguments {
  readonly acceptedAgreementId: string;
}

// Resource

export class DataOciMarketplaceAcceptedAgreement extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceAcceptedAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_accepted_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptedAgreementId = config.acceptedAgreementId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_agreement_id - computed: false, optional: false, required: true
  private _acceptedAgreementId: string;
  public get acceptedAgreementId() {
    return this._acceptedAgreementId;
  }
  public set acceptedAgreementId(value: string) {
    this._acceptedAgreementId = value;
  }

  // agreement_id - computed: true, optional: false, required: true
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // package_version - computed: true, optional: false, required: true
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // signature - computed: true, optional: false, required: true
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // time_accepted - computed: true, optional: false, required: true
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_agreement_id: this._acceptedAgreementId,
    };
  }
}
